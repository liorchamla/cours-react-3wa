import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93XUkACFtR-3rrWg193ai4RGi4SRMQjE",
  authDomain: "mod-react-2.firebaseapp.com",
  databaseURL:
    "https://mod-react-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mod-react-2",
  storageBucket: "mod-react-2.appspot.com",
  messagingSenderId: "614479867726",
  appId: "1:614479867726:web:1b1aaf5e97596a5697b81f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
