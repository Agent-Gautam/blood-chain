// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsRfY8Idk_ceF6vUu5XvVYf8K18lA3vb4",
  authDomain: "academiax-32fde.firebaseapp.com",
  projectId: "academiax-32fde",
  storageBucket: "academiax-32fde.appspot.com",
  messagingSenderId: "700556284304",
  appId: "1:700556284304:web:1bebb510924598185fa315",
  measurementId: "G-JWWYJN17QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const base = getFirestore(app);

export const parentCol = collection(base, "parents");
export const teacherCol = collection(base, "teachers");

const analytics = getAnalytics(app);