import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDO_-L-CSr3CGaE9nFlYTKrRqpJ-XZrqms",
    authDomain: "ema-john-simple-4cb98.firebaseapp.com",
    projectId: "ema-john-simple-4cb98",
    storageBucket: "ema-john-simple-4cb98.appspot.com",
    messagingSenderId: "952124101194",
    appId: "1:952124101194:web:eb6b6f6b28c7a6ebebccb3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;