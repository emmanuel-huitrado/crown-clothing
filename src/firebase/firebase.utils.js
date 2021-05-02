import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCN2YN1PdOfHD69Emkr6lNqInem68TnHYM",
    authDomain: "crwn-clothing-f8ea8.firebaseapp.com",
    projectId: "crwn-clothing-f8ea8",
    storageBucket: "crwn-clothing-f8ea8.appspot.com",
    messagingSenderId: "763614768751",
    appId: "1:763614768751:web:d26e9627918927d878279a",
    measurementId: "G-M59XL9Q8TK"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;