import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {

    apiKey: "AIzaSyBHzrLH1gK-7zUSOY6yDCfLaDZK1N73rPs",
    authDomain: "lesson9-aa929.firebaseapp.com",
    projectId: "lesson9-aa929",
    storageBucket: "lesson9-aa929.appspot.com",
    messagingSenderId: "567465336089",
    appId: "1:567465336089:web:ef8b71f7aa3948dabcf988"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebaseDB.database().ref()