import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa6aaYNx2FaL4kEMPMkrrr8hiegs_kUkg",
  authDomain: "clone-yt-32e3e.firebaseapp.com",
  projectId: "clone-yt-32e3e",
  storageBucket: "clone-yt-32e3e.appspot.com",
  messagingSenderId: "1038440465813",
  appId: "1:1038440465813:web:b367b5e6030140fdf4229c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
