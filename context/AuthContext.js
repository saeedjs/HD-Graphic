import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import cookie from "cookie";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [number, setNumber] = useState("");
  const [user, setUser] = useState();
  const [access, setAccess] = useState();

  const router = useRouter();
  useEffect(() => {
    refreshToken();
<<<<<<< HEAD
    0;
=======
>>>>>>> bb6eddb2f0441d775fd342a47a05d9babd699633
  }, []);
  const login = async (cellphone) => {
    setNumber(cellphone);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        cellphone,
      });
      toast.success(res.data.massage);
      localStorage.setItem("number", cellphone);
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

      setUser(res.data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      setAccess(localStorage.getItem("access"));
      router.push("/");
    } catch {
      console.log("مشکلی هستش!");
    }
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        "http://localhost:300/api/auth/refreshToken",
<<<<<<< HEAD
        {}
=======
        {
          refresh: localStorage.getItem("refresh"),
        }
>>>>>>> bb6eddb2f0441d775fd342a47a05d9babd699633
      );
      console.log(res.data);
    } catch {}
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ login, checkOtp, number, user, access }}>
=======
    <AuthContext.Provider
      value={{ login, checkOtp, number, user, access, refreshToken }}
    >
>>>>>>> bb6eddb2f0441d775fd342a47a05d9babd699633
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
