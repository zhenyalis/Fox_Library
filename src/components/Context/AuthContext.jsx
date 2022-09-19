import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL,  ref, uploadBytes } from "firebase/storage";

import { auth,storage } from "../Firebase/Firebase";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const register = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      console.log(err)
    );
    await updateProfile(auth.currentUser, { displayName: name }).catch((err) =>
      console.log(err)
    );
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Storage
  async function upload(file, user) {
    const fileRef = ref(storage, user.uid + ".png");
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    updateProfile(user, { photoURL });
    alert("Uploaded file!");
  }

  return (
    <UserContext.Provider value={{ register, user, logout, signIn,upload }}>
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
