import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAKagbjgLWWovEul11DyMpOY-BkfGlgeTI',
  authDomain: 'todo-app-45c21.firebaseapp.com',
  databaseURL: 'https://todo-app-45c21.firebaseio.com',
  projectId: 'todo-app-45c21',
  storageBucket: 'todo-app-45c21.appspot.com',
  messagingSenderId: '637914160506',
  appId: '1:637914160506:web:6d762f46767a0aeb2d8ac3'
})

export { firebaseConfig as firebase }
