
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';
// import {
//     getFirestore, collection, onSnapshot,
//     addDoc, deleteDoc, doc,
//     query, where,
//     orderBy, serverTimestamp
//   } from 'firebase/firestore'
  
  const firebaseConfig = {
    apiKey: "AIzaSyBBvUyOMh_eu1YDFjTrBrEagfZCxKz8NJQ",
    authDomain: "circlez-8e1cb.firebaseapp.com",
    projectId: "circlez-8e1cb",
    storageBucket: "circlez-8e1cb.appspot.com",
    messagingSenderId: "399178993682",
    appId: "1:399178993682:web:a14c6aaabf5b9059fcc8cb",
    measurementId: "G-31MGM41YM9"
  };


// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Get Realtime Database instance
const db = getDatabase(app);



export { firebase, db };