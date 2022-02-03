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

//не получилось запустить на firebase 9v, текущая версия 8v :(

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// //возможно это не нужно
// // import 'firebase/compat/firestore';
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAAotqIkUpJT74IhzU9Y9jN7f04pRe6kHs",
//   authDomain: "invoice-app-48429.firebaseapp.com",
//   projectId: "invoice-app-48429",
//   storageBucket: "invoice-app-48429.appspot.com",
//   messagingSenderId: "434428560071",
//   appId: "1:434428560071:web:8a26705ccd775129a2b4e2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

// //возможно это не нужно 2
// // export default app

// //возможно это не нужно
// // export default app.firestore();
