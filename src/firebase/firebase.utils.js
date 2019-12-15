import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCGV9CqB7dwlwmCQ7SRHTvUROFduYC6C1o",
  authDomain: "crwn-db-6edbd.firebaseapp.com",
  databaseURL: "https://crwn-db-6edbd.firebaseio.com",
  projectId: "crwn-db-6edbd",
  storageBucket: "crwn-db-6edbd.appspot.com",
  messagingSenderId: "1080189876393",
  appId: "1:1080189876393:web:6d39d275c627665b1951b8",
  measurementId: "G-8QZLH6P0YJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
