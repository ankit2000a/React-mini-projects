import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArcT2NmlWzxfXSwXTL6vU0Gqx7Mt22y0Q",
  authDomain: "react-notes-app-e2cc7.firebaseapp.com",
  projectId: "react-notes-app-e2cc7",
  storageBucket: "react-notes-app-e2cc7.appspot.com",
  messagingSenderId: "721840227528",
  appId: "1:721840227528:web:d72a50c372ea884db391fd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");
