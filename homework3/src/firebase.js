import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9tF6GtXuuTwQXElN9shGcey3oA9iiOBY",
  authDomain: "react-homework-d3095.firebaseapp.com",
  projectId: "react-homework-d3095",
  storageBucket: "react-homework-d3095.appspot.com",
  messagingSenderId: "728673022788",
  appId: "1:728673022788:web:371585f6ce5d57cdc75d11",
  measurementId: "G-LWMJCTVM8P",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
