// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwrW1AZ7A3k70R4kWujesk_pU8Gh-uLjQ",
    authDomain: "simple-firebase-90732.firebaseapp.com",
    projectId: "simple-firebase-90732",
    storageBucket: "simple-firebase-90732.firebasestorage.app",
    messagingSenderId: "335223357373",
    appId: "1:335223357373:web:ce7235c8a85d9e84db1cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;