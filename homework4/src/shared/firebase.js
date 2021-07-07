import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVGhsqCeKAuJOaKQy4Ge86Xguc3Ar_TMw",
  authDomain: "react-homework-50a70.firebaseapp.com",
  projectId: "react-homework-50a70",
  storageBucket: "react-homework-50a70.appspot.com",
  messagingSenderId: "830290407218",
  appId: "1:830290407218:web:3f1cf93b3d169fa2d7f12b",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
export const apiKey = firebaseConfig.apiKey;
const storage = firebase.storage();

export { auth, firestore, storage };
