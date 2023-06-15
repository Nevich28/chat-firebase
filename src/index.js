import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
import App from './App';

// Initialize Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBs9fWB2j6OrMpJ2nbsbH7Y_bpCU2w-fig',
    authDomain: 'chat-firebase-db33d.firebaseapp.com',
    projectId: 'chat-firebase-db33d',
    storageBucket: 'chat-firebase-db33d.appspot.com',
    messagingSenderId: '832316067054',
    appId: '1:832316067054:web:447c988c080bcad63fb7ff',
    measurementId: 'G-EQ198D71SL',
});
export const Context = createContext(null);

// const analytics = getAnalytics(app);
const auth = firebase.auth();
// const firestore = getFirestore(app);
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{ firebase, auth, firestore }}>
        <App />
    </Context.Provider>,
);
