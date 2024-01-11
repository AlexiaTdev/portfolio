import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Accueil from './Accueil';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{height:'3000px'}}></div>
    <Accueil />
    <div style={{height:'3000px'}}></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//    <App />