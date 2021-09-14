import firebase from 'firebase';

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig  = {
  apiKey: "AIzaSyDlEuUbBXPmRyCF2f48hTZa6CJ-wI16K_0",
  authDomain: "opium-37022.firebaseapp.com",
  projectId: "opium-37022",
  storageBucket: "opium-37022.appspot.com",
  messagingSenderId: "919459363981",
  appId: "1:919459363981:web:f80f872620c0c0d7e076c4",
  measurementId: "G-BKC6QV4YYE"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}