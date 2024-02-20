import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDp58GS-Gb_l6UwMXypt019T5I_w-iCbV4",
  authDomain: "epark-mobile.firebaseapp.com",
  projectId: "epark-mobile",
  storageBucket: "epark-mobile.appspot.com",
  messagingSenderId: "5661679623",
  appId: "1:5661679623:web:71738545d8aa67db480aa2"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);