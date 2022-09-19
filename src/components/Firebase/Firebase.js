import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAEZkUZd6ysffsRcFBl89RZDANe32vW6YU",
  authDomain: "diplom-tms.firebaseapp.com",
  projectId: "diplom-tms",
  storageBucket: "diplom-tms.appspot.com",
  messagingSenderId: "940991915717",
  appId: "1:940991915717:web:ec4f4607b042b4d4ecf2ac",
  measurementId: "G-NWENMGWRL8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
