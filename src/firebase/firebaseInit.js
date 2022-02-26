import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAAotqIkUpJT74IhzU9Y9jN7f04pRe6kHs",
  authDomain: "invoice-app-48429.firebaseapp.com",
  projectId: "invoice-app-48429",
  storageBucket: "invoice-app-48429.appspot.com",
  messagingSenderId: "434428560071",
  appId: "1:434428560071:web:8a26705ccd775129a2b4e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
