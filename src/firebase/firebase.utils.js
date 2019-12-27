import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWScZz7nYaHnxTZ8obCaUuFyFZm5gNmfc",
    authDomain: "crown-db-540b6.firebaseapp.com",
    databaseURL: "https://crown-db-540b6.firebaseio.com",
    projectId: "crown-db-540b6",
    storageBucket: "crown-db-540b6.appspot.com",
    messagingSenderId: "702087425814",
    appId: "1:702087425814:web:2021d0e533bff28024ea37"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;