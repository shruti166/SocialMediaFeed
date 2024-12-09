import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC2h8xEIjAToCvA6D5_lpJ5IznfCHILbyw",
    authDomain: "vibesnap-f1436.firebaseapp.com",
    projectId: "vibesnap-f1436",
    storageBucket: "vibesnap-f1436.firebasestorage.app",
    messagingSenderId: "812940792659",
    appId: "1:812940792659:web:55cda04f6b9e4be75887a6",
    measurementId: "G-VL9082VPNG"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User signed in: ", user);
    return user;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.log(GoogleAuthProvider.credentialFromError(firebaseError));
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};
