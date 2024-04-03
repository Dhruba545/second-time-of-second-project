// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPZjAcr4Fk41Gd4DF4U4jB0lhyCV15XT4",
  authDomain: "second-time-of-second-project.firebaseapp.com",
  projectId: "second-time-of-second-project",
  storageBucket: "second-time-of-second-project.appspot.com",
  messagingSenderId: "513038962798",
  appId: "1:513038962798:web:6d3749b90abe7119c6967f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
// এইখানে default app ব্যাবহার করলে  একে  ইম্পোর্ট করার সময় app কে নিয়ে তাকে 
// auth = getAuth(app); করা হইতো আমি ঐটা না করে সরাসরি এইখানে getAuth(app) করে auth টাকে export করেছি 
const auth = getAuth(app);
export default auth;

