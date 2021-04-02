import firebase from 'firebase/app';
import 'firebase/auth';

const config = firebase.initializeApp({
    apiKey: "AIzaSyBnaNi43cT266uKMFh8K3w6AExU5CCZnA8",
    authDomain: "foodsty-aa205.firebaseapp.com",
    projectId: "foodsty-aa205",
    storageBucket: "foodsty-aa205.appspot.com",
    messagingSenderId: "872411623609",
    appId: "1:872411623609:web:2251074702a6fc32d96b68",
    measurementId: "G-H6GT1VS0FM"
});

export default config;