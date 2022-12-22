import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    refreshToken();
  }, []);

  const [number, setNumber] = useState("");
  const [user, setUser] = useState();
  const router = useRouter();
  const login = async (cellphone) => {
    setNumber(cellphone);
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
        number,
      });

      setUser(res.data.user);
      console.log(res.data.user);
      router.push("/");
    } catch {}
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/otp/refreshToken",
        {
          refresh: req.cookies.refresh,
        }
      );
      console.log(res.data);
      router.push("/");
    } catch {}
  };

  return (
    <AuthContext.Provider
      value={{ login, checkOtp, number, user, refreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
