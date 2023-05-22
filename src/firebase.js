// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCFEUoQbusnDyk-R6TF_CB5VcCw4hmsYC4",
  authDomain: "mercor-backend-task.firebaseapp.com",
  projectId: "mercor-backend-task",
  storageBucket: "mercor-backend-task.appspot.com",
  messagingSenderId: "326373405780",
  appId: "1:326373405780:web:4e5fab197085740d39e9c1",
  measurementId: "G-BCJ8GF6VJ8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;