import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAIaq2Zyhgwqacr1NN_XXHmqNDcUEDgab4",
  authDomain: "koston0.firebaseapp.com",
  projectId: "koston0",
  storageBucket: "koston0.appspot.com",
  messagingSenderId: "985684077144",
  appId: "1:985684077144:web:19a1435bcd23b0b610f82d",
  measurementId: "G-TFHQF57FZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
