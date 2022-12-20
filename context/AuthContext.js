import axios from "axios";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const login = async (cellphone) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login");
      console.log(res.data);
    } catch {
      console.log("مشکلی هست!");
    }
    console.log("login Authcontext");
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
