import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//some of the features are updated in the newer version of the firebase, so instead of downgradin, firebase offers something called 'compat' which when added to our import statements resolve this issue.
const config = {
        apiKey: "AIzaSyBviv5HZd3BghGUZeRoPo7ChvnIrfYpHME",
        authDomain: "gamer-stop.firebaseapp.com",
        databaseURL: "https://gamer-stop-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "gamer-stop",
        storageBucket: "gamer-stop.appspot.com",
        messagingSenderId: "1036873877139",
        appId: "1:1036873877139:web:8ae36785996beb1b7b2f66",
        measurementId: "G-GCC19RNFKX"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;