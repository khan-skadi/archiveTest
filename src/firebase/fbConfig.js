import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOqRzRQtrSZSG_1dSjDZxLHifDdlOugpY',
  authDomain: 'redux-test-skadi.firebaseapp.com',
  databaseURL: 'https://redux-test-skadi.firebaseio.com',
  projectId: 'redux-test-skadi',
  storageBucket: 'redux-test-skadi.appspot.com',
  messagingSenderId: '216937498441',
  appId: '1:216937498441:web:4142d03b94b1e2a6273c98'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
