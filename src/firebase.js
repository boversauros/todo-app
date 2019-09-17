import firebase from 'firebase/app'
import 'firebase/firestore'

const { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_DB_URL, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MSG_SENDER_ID, REACT_APP_ID } = process.env

const firebaseConfig = firebase.initializeApp({
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DB_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MSG_SENDER_ID,
  appId: REACT_APP_ID
})

// hello world
export { firebaseConfig as firebase }
