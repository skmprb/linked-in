import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABUimifE-UDapcFw49sV06y4LP-venC6w",
  authDomain: "linked--in.firebaseapp.com",
  projectId: "linked--in",
  storageBucket: "linked--in.appspot.com",
  messagingSenderId: "97213093286",
  appId: "1:97213093286:web:3f286bbb9721553deaeb67",
  measurementId: "G-RH2TJRSH30"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export {auth};
export default db;