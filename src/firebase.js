import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCchAej_UGonfxLWOUitwyhM3IlMOGyENE",
    authDomain: "clone-20172.firebaseapp.com",
    projectId: "clone-20172",
    storageBucket: "clone-20172.appspot.com",
    messagingSenderId: "539058537406",
    appId: "1:539058537406:web:ebea59ddc7f34efb762fef",
    measurementId: "G-BBNMKTN3W3"
  }

  firebase.initializeApp(firebaseConfig)

export default firebase.auth()