import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDk5dKUlPyEJSejimFjyM87tmpijSpXEUU",
    authDomain: "abc-website-48f8b.firebaseapp.com",
    projectId: "abc-website-48f8b",
    storageBucket: "abc-website-48f8b.appspot.com",
    messagingSenderId: "650012268039",
    appId: "1:650012268039:web:ead956421317b4c3483ca2",
    measurementId: "G-268DTHLQ1S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore }