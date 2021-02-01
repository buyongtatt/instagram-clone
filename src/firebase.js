import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAvVA93IbkODZOA9EPLP_YgfccwdDBs04E",
    authDomain: "instagram-clone-9c95f.firebaseapp.com",
    projectId: "instagram-clone-9c95f",
    storageBucket: "instagram-clone-9c95f.appspot.com",
    messagingSenderId: "1015001080473",
    appId: "1:1015001080473:web:68681848e80060ec788e08",
    measurementId: "G-M8MLZJ7NMX"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};