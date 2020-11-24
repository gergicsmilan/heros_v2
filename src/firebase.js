// Your web app's Firebase configuration
import config from "./heros-v2-firestore-connector.json"
import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = config;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
export default firebase