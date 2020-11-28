import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  React.createElement(
  <Auth0Provider
    domain="login.presalytics.io"
    clientId=
    redirectUri={window.location.origin}
  >

  <App/>
</Auth0Provider>),
document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
