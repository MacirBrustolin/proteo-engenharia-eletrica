import { doc, getDoc } from "firebase/firestore"
import firebase from '../../../firebase/clientApp'

export default async function handler({query: { id }}, res){
    let data = []
    const docRef = doc(firebase.db, "articles", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    data = {
      id: docSnap.id,
      ...docSnap.data()
    }
    // console.log(data.id)
      res.status(200).json(data)
    } else {
    // doc.data() will be undefined in this case
    // console.log("No such document!");
    res.status(404)
    }
}