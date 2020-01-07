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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Fetch user from firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // Get user snapshot
  const userSnapShotData = await userRef.get();

  // Check if user exists already in fireStore
  if (!userSnapShotData.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    console.log(additionalData);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;
