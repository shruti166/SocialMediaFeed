import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) setUser(currentUser);
      else setUser(null);
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [auth]);

  const values = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;


