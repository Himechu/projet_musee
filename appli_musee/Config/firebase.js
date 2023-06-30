// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZncoV_5a0H91OtIO1DwznTQJFMpjapU",
  authDomain: "fir-doranco-cda-50be9.firebaseapp.com",
  projectId: "fir-doranco-cda-50be9",
  storageBucket: "fir-doranco-cda-50be9.appspot.com",
  messagingSenderId: "656027022660",
  appId: "1:656027022660:web:495fcf9bf7653832079311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

