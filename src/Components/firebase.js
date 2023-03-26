
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCU9eNmjNQ5MrJhWwdEdGndDJcMFMUFvJw",
    authDomain: "disneyplus-clone-4db18.firebaseapp.com",
    projectId: "disneyplus-clone-4db18",
    storageBucket: "disneyplus-clone-4db18.appspot.com",
    messagingSenderId: "737699219571",
    appId: "1:737699219571:web:9d68f90410597399d38206",
    measurementId: "G-M39M2DBJDN"
  };

const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);
const provider=new GoogleAuthProvider();
const storage=new getStorage(firebaseApp);

export {auth,provider,storage};
export default db;