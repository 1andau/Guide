import { createContext, useContext, useState } from "react";
import {
  onAuthStateChanged,
  signOut,  
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../components/firebase";



export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = () => {
    setLoading(true);
    setError("");

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const signInWithGithub = () => {
    setLoading(true);
    setError("");
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };
  const contextValue = {
    user,
    loading,
    logoutUser,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    
  );

};