import firebase from 'firebase'

const config = {
　apiKey: "AIzaSyDXtJ4yy-dnIsbxpF6WzLjrGE46Y1Z_GE0",
  authDomain: "bigday-d8a7f.firebaseapp.com",
  databaseURL: "https://bigday-d8a7f.firebaseio.com",
  projectId: "bigday-d8a7f",
  storageBucket: "bigday-d8a7f.appspot.com",
  messagingSenderId: "855604432240",
  appId: "1:855604432240:web:6159613f6143bf589b53b5",
  measurementId: "G-7FXBPVTZQ4"
    
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    firebase.analytics()
}

export const auth = firebase.auth
export default firebase