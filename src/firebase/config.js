import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsHtKppD8ZOaVnVEQ8eFyBBnInjdr0-xM",
  authDomain: "fire-gram-a0ac0.firebaseapp.com",
  projectId: "fire-gram-a0ac0",
  storageBucket: "fire-gram-a0ac0.appspot.com",
  messagingSenderId: "35785664791",
  appId: "1:35785664791:web:a4aa935688db05d43cef52",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectStorage, timeStamp };
