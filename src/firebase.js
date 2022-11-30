// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJJrLmk7mvlQvrEtcTVY2cT5oSC163-I8",
    authDomain: "twitter-clone-fcb7a.firebaseapp.com",
    projectId: "twitter-clone-fcb7a",
    storageBucket: "twitter-clone-fcb7a.appspot.com",
    messagingSenderId: "232772330148",
    appId: "1:232772330148:web:2dbfa693010f0bced93c31",
    measurementId: "G-B3GGYEN94N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;