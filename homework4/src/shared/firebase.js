import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCid3s26Rdtb3CPsu0pURJ-2jHPpmTT7GA",
  authDomain: "react-homework3.firebaseapp.com",
  projectId: "react-homework3",
  storageBucket: "react-homework3.appspot.com",
  messagingSenderId: "995971959172",
  appId: "1:995971959172:web:ec9b8e490919f858c375d1",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
