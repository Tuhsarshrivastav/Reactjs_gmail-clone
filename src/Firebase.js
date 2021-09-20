import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbe-YcQf0BHEdiGSPgoEgPVINJBQ7QjjY",
  authDomain: "clone-6125a.firebaseapp.com",
  projectId: "clone-6125a",
  storageBucket: "clone-6125a.appspot.com",
  messagingSenderId: "839512788553",
  appId: "1:839512788553:web:73287b5c36ebc9d473f998",
  measurementId: "G-LQF2LSE5PS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
