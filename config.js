import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyB731yxrTQsZJvhrohkhyUmJi21ryMNH8c",
  authDomain: "bartersystem-e3cfa.firebaseapp.com",
  projectId: "bartersystem-e3cfa",
  storageBucket: "bartersystem-e3cfa.appspot.com",
  messagingSenderId: "143460017089",
  appId: "1:143460017089:web:fa4519c0be555bddac0540"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();