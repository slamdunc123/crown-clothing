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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;