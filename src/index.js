import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from 'firebase/app';


// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB-lKkNIqeffSS1mOOmJIcTcmi4n2Vke_A",
  authDomain: "funguy-ff742.firebaseapp.com",
  projectId: "funguy-ff742",
  storageBucket: "funguy-ff742.appspot.com",
  messagingSenderId: "803116837265",
  appId: "1:803116837265:web:cde1a5f1463e9f67f21230"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();