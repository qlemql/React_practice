import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTLRtEMOipjA1itynj8qyiMYJ9tCt-Aig",
  authDomain: "react-test-5e337.firebaseapp.com",
  projectId: "react-test-5e337",
  storageBucket: "react-test-5e337.appspot.com",
  messagingSenderId: "307109225840",
  appId: "1:307109225840:web:025a27ba4ae56bb83d9bb5",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
