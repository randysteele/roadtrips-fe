import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose} from 'redux'
import destinations from './reducers/destinations'
import {BrowserRouter as Router} from 'react-router-dom'
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(destinations, composeEnhancer(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
      <Router>
      <Auth0Provider>
    <App />
    </Auth0Provider>
    </Router>    
  </Provider>  
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();