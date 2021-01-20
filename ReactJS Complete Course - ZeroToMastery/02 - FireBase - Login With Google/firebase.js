// npm install firebase
// sửa cái config kia bằng config object tạo bởi firebase

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCBGx-ke_P5Dii7FbDtvFeLy7Xf3Ach9P4",
    authDomain: "thanhhung-pcshop.firebaseapp.com",
    projectId: "thanhhung-pcshop",
    storageBucket: "thanhhung-pcshop.appspot.com",
    messagingSenderId: "100034306548",
    appId: "1:100034306548:web:f6448cfc0b5bcb8d79d9a1",
    measurementId: "G-FRL8KSJQRH"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase