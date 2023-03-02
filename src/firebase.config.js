import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL5V-QJa3MbA_1OOrAqmm41UgawvZwmI8",

  authDomain: "ez-notes-dde58.firebaseapp.com",

  projectId: "ez-notes-dde58",

  storageBucket: "ez-notes-dde58.appspot.com",

  messagingSenderId: "42512768751",

  appId: "1:42512768751:web:be6f8822bc87f6e7d6451a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};