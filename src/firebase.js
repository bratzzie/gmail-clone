import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_HELP}`,
    authDomain: "clone-68eb6.firebaseapp.com",
    projectId: "clone-68eb6",
    storageBucket: "clone-68eb6.appspot.com",
    messagingSenderId: "183741919122",
    appId: "1:183741919122:web:bcfc1204817fc5032d9b4b",
    measurementId: "G-DY8L6DLM88"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};