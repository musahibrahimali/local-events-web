import firebase from 'firebase';

/// firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBzcdepLpe1chm-HbQM0XUP8V5a2w9921o",
    authDomain: "smart-events-deepseeinc.firebaseapp.com",
    projectId: "smart-events-deepseeinc",
    storageBucket: "smart-events-deepseeinc.appspot.com",
    messagingSenderId: "240216732529",
    appId: "1:240216732529:web:91204fafc16e7933723cd0",
    measurementId: "G-LFS45WY9W4"
};

// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;
