// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'e-commerce-e3187.firebaseapp.com',
  projectId: 'e-commerce-e3187',
  storageBucket: 'e-commerce-e3187.appspot.com',
  messagingSenderId: '404562589792',
  appId: '1:404562589792:web:9943548063833b3d44eb05',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
