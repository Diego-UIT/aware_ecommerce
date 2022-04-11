// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB52q2XqZ1DmL5DkSn7Bqy9BzCYDVGRU1c",
  authDomain: "aware-eccomerce.firebaseapp.com",
  projectId: "aware-eccomerce",
  storageBucket: "aware-eccomerce.appspot.com",
  messagingSenderId: "620169004749",
  appId: "1:620169004749:web:d292ad7a7ad9234cfbcb84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;