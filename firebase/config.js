import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBp2NZuqLCYwJCUISJSmDNfoVfHzd3UaOo',
  authDomain: 'syncrocalendars.firebaseapp.com',
  databaseURL: 'https://syncrocalendars.firebaseio.com',
  projectId: 'syncrocalendars',
  storageBucket: 'syncrocalendars.appspot.com',
  messagingSenderId: '505957339399',
  appId: '1:505957339399:web:afacc7d81d5fdff50375a2',
  measurementId: 'G-60WKEF0SKE',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
