
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup}from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBgH3egJ83TMnOGcqtYWkG55X3_sitrdaQ",
  authDomain: "gitgub-and--auth.firebaseapp.com",
  projectId: "gitgub-and--auth",
  storageBucket: "gitgub-and--auth.appspot.com",
  messagingSenderId: "812629932069",
  appId: "1:812629932069:web:1c9ba56166c463d48ee7cc"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const provider = new GoogleAuthProvider();


export const signInWithGoogle = () =>{
signInWithPopup(auth, provider)

    .then((result) =>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)

    })

    .catch((error) =>{
        console.log(error);
    });  

};