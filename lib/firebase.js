import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8hxlYSfm-TJoeCiywSnlsmWW92PdG4r8",
    authDomain: "cometvisor.firebaseapp.com",
    projectId: "cometvisor",
    storageBucket: "cometvisor.appspot.com",
    messagingSenderId: "580114364219",
    appId: "1:580114364219:web:3fe11eb406927e20a8291e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;