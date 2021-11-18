import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
      setLoading(false);
    });
  }, []);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(()=>setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>setLoading(false));
  };

  return {
    user,
    loading,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;