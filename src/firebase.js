import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBifMNYdw_zEqw1MxutGXPT4Y-C9WyTCCU",
    authDomain: "slack-clone-d1f8b.firebaseapp.com",
    databaseURL: "https://slack-clone-d1f8b.firebaseio.com",
    projectId: "slack-clone-d1f8b",
    storageBucket: "slack-clone-d1f8b.appspot.com",
    messagingSenderId: "981641706096",
    appId: "1:981641706096:web:c389e1e10f3956ba7312b5",
    measurementId: "G-EN2929RB5X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db;