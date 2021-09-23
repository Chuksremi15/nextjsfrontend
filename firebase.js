import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ragiMYGpOJCkQIP2qO_EEdpUESWhoQ8",
  authDomain: "midl-man.firebaseapp.com",
  projectId: "midl-man",
  storageBucket: "midl-man.appspot.com",
  messagingSenderId: "58392134329",
  appId: "1:58392134329:web:0df962113b5a19dd981168",
  measurementId: "G-72PH0DR3PW",
};

//if there is no firebase app thenn initialize app else use existing app
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = app.auth();
const GProvider = new firebase.auth.GoogleAuthProvider();
const FBProvider = new firebase.auth.FacebookAuthProvider();

export { auth, GProvider, FBProvider };
