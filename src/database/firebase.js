import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk0DLFz02LQs71R6MYAUl2P76OBcSvbhw",
  authDomain: "linkedin-clone-97bee.firebaseapp.com",
  projectId: "linkedin-clone-97bee",
  storageBucket: "linkedin-clone-97bee.appspot.com",
  messagingSenderId: "781782362043",
  appId: "1:781782362043:web:529e4bb87166b2c47a869e",
  measurementId: "G-5D0KPLEXLV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
