import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDkTCSu6ONks0SxNXVRTpr5dQymvARFhQM",
    authDomain: "todoistclone-26c64.firebaseapp.com",
    databaseURL: "https://todoistclone-26c64.firebaseio.com",
    projectId: "todoistclone-26c64",
    storageBucket: "todoistclone-26c64.appspot.com",
    messagingSenderId: "496425076073",
    appId: "1:496425076073:web:560f73732a9f7110e3e9f8"
  });

export {firebaseConfig as firebase };