import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaQ-a0uxmDY7cpv6XCTM8EQYlqDpBIMSY",
  authDomain: "food-app-2811a.firebaseapp.com",
  projectId: "food-app-2811a",
  storageBucket: "food-app-2811a.appspot.com",
  messagingSenderId: "763024372272",
  appId: "1:763024372272:web:c301a1e04423bd66e333f5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
