import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCtF2kZkF3if1KYkL5mknNyOdJvq-u6AB8',
  authDomain: 'phoenix-inductions-2021.firebaseapp.com',
  projectId: 'phoenix-inductions-2021',
  storageBucket: 'phoenix-inductions-2021.appspot.com',
  messagingSenderId: '692395302373',
  appId: '1:692395302373:web:5eb9761cea2856108a230c',
  measurementId: 'G-F6LRMF2RT2',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
