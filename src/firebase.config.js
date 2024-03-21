import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDp58GS-Gb_l6UwMXypt019T5I_w-iCbV4",
  authDomain: "epark-mobile.firebaseapp.com",
  projectId: "epark-mobile",
  storageBucket: "epark-mobile.appspot.com",
  messagingSenderId: "5661679623",
  appId: "1:5661679623:web:71738545d8aa67db480aa2"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
