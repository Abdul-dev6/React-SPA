import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../FireBase/Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (user) {

            const userDoc =
              await getDoc(
                doc(db, "users", user.uid)
              );

            setCurrentUser({
              uid: user.uid,
              ...userDoc.data(),
            });

          } else {

            setCurrentUser(null);
          }

          setLoading(false);
        }
      );

    return () => unsubscribe();

  }, []);

  return (

    <AuthContext.Provider
      value={{ currentUser }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);