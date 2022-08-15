import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZb0WBby2Ur1lO2S69fBVVsHnNg9auwG0",
    authDomain: "chat-app-c32b0.firebaseapp.com",
    projectId: "chat-app-c32b0",
    storageBucket: "chat-app-c32b0.appspot.com",
    messagingSenderId: "719970740289",
    appId: "1:719970740289:web:0d1ae9c5edb7e8d1767ec0",
    measurementId: "G-8B7XGPX33Q"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }