import { getAuth } from "firebase/auth"

import firebase from "firebase/compat/app";
import 'firebase/compat/database'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTpn91Ro9oVLu8PlsBXkP2gcZEnbxvmHE",
    authDomain: "form-a32ed.firebaseapp.com",
    databaseURL: "https://form-a32ed-default-rtdb.firebaseio.com",
    projectId: "form-a32ed",
    storageBucket: "form-a32ed.appspot.com",
    messagingSenderId: "1092203340313",
    appId: "1:1092203340313:web:ad591d0f8dd9e21f340088",
    measurementId: "G-LCD4EFXBRH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app