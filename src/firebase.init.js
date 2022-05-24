// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoi-z-eCtYfKN71g5_xzY4heHjH13IGvg",
    authDomain: "highway-automotive-accessories.firebaseapp.com",
    projectId: "highway-automotive-accessories",
    storageBucket: "highway-automotive-accessories.appspot.com",
    messagingSenderId: "991005447390",
    appId: "1:991005447390:web:10d8bdeb5a11a412c75e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;