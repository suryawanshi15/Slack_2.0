import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwCFY_jj8NCug_1QFbuTAS5sPDeMkN9oM",
  authDomain: "slack-clone-d76ba.firebaseapp.com",
  projectId: "slack-clone-d76ba",
  storageBucket: "slack-clone-d76ba.appspot.com",
  messagingSenderId: "610468577581",
  appId: "1:610468577581:web:2edcdb9310e2d0b36b93a4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider }