// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5PgnnZDBuzyl37pBj5Krcdxby8DEw3eQ",
  authDomain: "linkedin-clone-a0f04.firebaseapp.com",
  projectId: "linkedin-clone-a0f04",
  storageBucket: "linkedin-clone-a0f04.appspot.com",
  messagingSenderId: "303126860241",
  appId: "1:303126860241:web:419e2c3415785028e0d0f0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
