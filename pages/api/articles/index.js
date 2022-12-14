import { collection, getDocs } from "firebase/firestore"
import firebase from '../../../firebase/clientApp'

export default async function handler(req, res){
  let data = []
  const querySnapshot = await getDocs(collection(firebase.db, "articles"))

  if (querySnapshot != null) {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      data.push({
        id: doc.id,
        ...doc.data()
      })
    })
    // console.log(data)
    res.status(200).json(data)
  } else {
    res.status(404)
  }
}