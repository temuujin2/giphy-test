import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebaseKey";


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = firebase.firestore();

// export default db;
