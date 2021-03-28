import firebase from "firebase";

const firebaseConfig = {
  apiKey: {
    /*//insert here your API KEY*/
  },
  authDomain: "########################",
  projectId: "########################",,
  storageBucket: "########################",,
  messagingSenderId: "########################",,
  appId: {
    /*Add your app id provided by Firebase*/
  },
  measurementId: "########################",,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
