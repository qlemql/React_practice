import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIEH_DMVsadJfnWgaKMqXNcoxD3eNoL2Y",
  authDomain: "react-homework2.firebaseapp.com",
  projectId: "react-homework2",
  storageBucket: "react-homework2.appspot.com",
  messagingSenderId: "829683080822",
  appId: "1:829683080822:web:491999e7857c1d427a8957",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth, apiKey };
