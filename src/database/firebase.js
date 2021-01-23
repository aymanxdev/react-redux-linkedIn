import firebase from "firebase";

const firebaseConfig = {
  apiKey: {
    /*//insert here your API KEY*/
  },
  authDomain: "linkedin-clone-97bee.firebaseapp.com",
  projectId: "linkedin-clone-97bee",
  storageBucket: "linkedin-clone-97bee.appspot.com",
  messagingSenderId: "781782362043",
  appId: {
    /*Add your app id provided by Firebase*/
  },
  measurementId: "G-5D0KPLEXLV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
