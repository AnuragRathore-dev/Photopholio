
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: //"your api key", // remove due to security reasons
  authDomain: "photoalbum-8409b.firebaseapp.com",
  projectId: "photoalbum-8409b",
  storageBucket: "photoalbum-8409b.appspot.com",
  messagingSenderId: //" messagingSenderId", // remove due to security reasons
  appId: //"appid" // remove due to security reasons
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
