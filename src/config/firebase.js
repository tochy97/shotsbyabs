import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDy1MFqqmOzB49MtAVyt_oia8f4Fg3oZYc",
    authDomain: "shotsbyabs-8ee3e.firebaseapp.com",
    projectId: "shotsbyabs-8ee3e",
    storageBucket: "shotsbyabs-8ee3e.appspot.com",
    messagingSenderId: "1046913097803",
    appId: "1:1046913097803:web:e75b2bc593bef94201adce",
    measurementId: "G-9N5NW9WM1D"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const store = app.firestore();
export const storage = app.storage();