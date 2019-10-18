import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBWybZdefIE5oLKg55Xoyg5fOPcppj101k",
    authDomain: "liverpoolsitedb.firebaseapp.com",
    databaseURL: "https://liverpoolsitedb.firebaseio.com",
    projectId: "liverpoolsitedb",
    storageBucket: "liverpoolsitedb.appspot.com",
    messagingSenderId: "432433973859",
    appId: "1:432433973859:web:f75c318b6edf173b394656"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}