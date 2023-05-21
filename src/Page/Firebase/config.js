import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { iinitializeApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLQ5D2JkwXJt5agdTLL5STzkF_GpBkHOk",

  authDomain: "my-project-1aa66.firebaseapp.com",

  projectId: "my-project-1aa66",

  storageBucket: "my-project-1aa66.appspot.com",

  messagingSenderId: "770251721636",

  appId: "1:770251721636:web:c0ffc1cd0d9e3ab7d60f31",

  measurementId: "G-V5PYPPRJ8S",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
export default firebase;
