import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7ExeeMtMKwDHMnu9iLY4jYuPANjvfSVM",
  authDomain: "eshop-4ccfe.firebaseapp.com",
  projectId: "eshop-4ccfe",
  storageBucket: "eshop-4ccfe.appspot.com",
  messagingSenderId: "746641785018",
  appId: "1:746641785018:web:6362292ccc4c6b710d4283",
  measurementId: "G-6QC68W98C0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
