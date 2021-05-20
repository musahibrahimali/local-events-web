import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

/// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBzcdepLpe1chm-HbQM0XUP8V5a2w9921o",
    authDomain: "smart-events-deepseeinc.firebaseapp.com",
    databaseURL: "https://smart-events-deepseeinc-default-rtdb.firebaseio.com",
    projectId: "smart-events-deepseeinc",
    storageBucket: "smart-events-deepseeinc.appspot.com",
    messagingSenderId: "240216732529",
    appId: "1:240216732529:web:91204fafc16e7933723cd0",
    measurementId: "G-LFS45WY9W4"
};
const fireBase = firebase.initializeApp(firebaseConfig);

/* generate user details */
export const generateUserDocument = async (user, data) => {

    if(!user) return;
    const userRef = database.ref(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists()){
        const { email } = user;
        try {
            await userRef.set({
                userInfo:{
                    email,
                    ...data
                }
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
}

const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
        const userDocument = await database.ref(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.val()
        };
    } catch (error) {
        alert("Error fetching user" + error.toString());
    }
}

export default fireBase;
export const authentication = fireBase.auth();
export const database = fireBase.database();

