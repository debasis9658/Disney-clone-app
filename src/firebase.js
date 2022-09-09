import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyASDMtD9dUboM-HBm7Y59ssGz0Wa9e7ats",
    authDomain: "disneyplus-clone-18f46.firebaseapp.com",
    projectId: "disneyplus-clone-18f46",
    storageBucket: "disneyplus-clone-18f46.appspot.com",
    messagingSenderId: "744790031331",
    appId: "1:744790031331:web:15ccd0d5edc2f6448dfed6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export { auth, provider, storage};
  export default db;