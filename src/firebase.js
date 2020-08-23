import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCquXppmUNG76wp_v2o0tq2T25QhVD1vNQ",
    authDomain: "tinder-2d119.firebaseapp.com",
    databaseURL: "https://tinder-2d119.firebaseio.com",
    projectId: "tinder-2d119",
    storageBucket: "tinder-2d119.appspot.com",
    messagingSenderId: "960331018364",
    appId: "1:960331018364:web:ac24686212f14347b019f9",
    measurementId: "G-1YH0VEEQSY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;