import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TROQUE PELOS DADOS DO SEU FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCps-QBF6hYHa7Ui4c6sDu857n2qxENQzw",
  authDomain: "canecas-del-rei.firebaseapp.com",
  projectId: "canecas-del-rei",
  storageBucket: "canecas-del-rei.firebasestorage.app",
  messagingSenderId: "479936247374",
  appId: "1:479936247374:web:238b4e3b9c191376f1351f",
  measurementId: "G-MVTK635Y2Q"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, serverTimestamp };
