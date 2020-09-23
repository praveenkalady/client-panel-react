import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore' 
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  firebaseReducer
} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

const fbConfig = {
    apiKey: "AIzaSyDEKlSvhxdcY7qgHIwSYvcD7OIyqh_mAhc",
    authDomain: "client-panel-65552.firebaseapp.com",
    databaseURL: "https://client-panel-65552.firebaseio.com",
    projectId: "client-panel-65552",
    storageBucket: "client-panel-65552.appspot.com",
    messagingSenderId: "1071699713868",
    appId: "1:1071699713868:web:77066702b77d052d3279e9",
    measurementId: "G-BK5FQD3401"
}



// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore()

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, composeWithDevTools());

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps} >
    <App/>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
