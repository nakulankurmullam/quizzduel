// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSwE1mCE4KM3ckuQLXYRoo9pRLLhK2V2s",
  authDomain: "quizz-app-37a69.firebaseapp.com",
  projectId: "quizz-app-37a69",
  storageBucket: "quizz-app-37a69.appspot.com",
  messagingSenderId: "112958611385",
  appId: "1:112958611385:web:f25d46e217195dcbfae068",
  measurementId: "G-RGZTC30BL2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
