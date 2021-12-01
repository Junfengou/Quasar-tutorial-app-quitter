import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyArenD0rjIZljhY84QgnOBLL9S69Vsq1F0",
  authDomain: "quitter-6234d.firebaseapp.com",
  projectId: "quitter-6234d",
  storageBucket: "quitter-6234d.appspot.com",
  messagingSenderId: "446465983277",
  appId: "1:446465983277:web:efadb484e5061eedaec9a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// access firebase database with db variable
const db = firebase.firestore()

export default db
