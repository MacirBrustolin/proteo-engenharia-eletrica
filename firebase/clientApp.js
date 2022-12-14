// TODO: Add SDKs for Firebase products that you want to use
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';          //Inicialização do Firebase no app
import { getAuth } from 'firebase/auth';               //Autenticação para Web
import { getFirestore } from 'firebase/firestore';     //Cloud firestore para Web
import { getDatabase } from 'firebase/database';       //Real time database
// Follow this pattern to import other Firebase services
// import { } from 'firebase/compat/<service>';
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    //get the realtime databse
    const database = getDatabase(app);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    // console.log(db)

//export to use the firebase
export default {app, db, database, auth}; 
