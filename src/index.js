import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIaq2Zyhgwqacr1NN_XXHmqNDcUEDgab4",
  authDomain: "koston0.firebaseapp.com",
  projectId: "koston0",
  storageBucket: "koston0.appspot.com",
  messagingSenderId: "985684077144",
  appId: "1:985684077144:web:19a1435bcd23b0b610f82d",
  measurementId: "G-TFHQF57FZV"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
