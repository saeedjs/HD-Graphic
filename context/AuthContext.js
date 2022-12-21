import axios from "axios";
import { createContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const login = async (cellphone) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        cellphone,
      });
      toast.success(res.data.massage);
    } catch {
      console.log("مشکلی هست!");
    }
    console.log("login Authcontext");
  };

  const checkOtp = async (otp) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/checkOtp", {
        otp,
      });
      console.log(res.data);
    } catch {
      console.log("مشکلی هست!");
    }
  };

  return (
    <AuthContext.Provider value={{ login, checkOtp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
