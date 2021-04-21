import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBn6sRooD6sgryynGvm2RshPKKjHV0Z-xk",
    authDomain: "facebook-messengerclone-bf872.firebaseapp.com",
    projectId: "facebook-messengerclone-bf872",
    storageBucket: "facebook-messengerclone-bf872.appspot.com",
    messagingSenderId: "434577627031",
    appId: "1:434577627031:web:de05fab64e0731395c16d2"


})

const db = firebaseApp.firestore()

export default db