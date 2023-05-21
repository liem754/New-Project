import { useEffect } from "react";
import { auth } from "../../Page/Firebase/config";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const unsubcrite = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        navigate("/home");
        return;
      }
    });
    return () => {
      unsubcrite();
    };
  }, [navigate]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
