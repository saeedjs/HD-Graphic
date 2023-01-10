import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import cookie from "cookie";

import "react-toastify/dist/ReactToastify.css";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [number, setNumber] = useState("");
  const [user, setUser] = useState();
  const [access, setAccess] = useState();
  const [newUser, setNewUser] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!access) {
      refreshToken();
    }

    0;
  }, []);
  const login = async (cellphone) => {
    setNumber(cellphone);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        cellphone,
      });
      toast.success(res.data.massage);
      localStorage.setItem("number", cellphone);
      console.log(res.data.data);
      setNewUser(res.data.data.new_user);
      console.log(newUser);
    } catch {
      console.log("مشکلی هست!");
    }
    console.log("login Authcontext");
  };

  const checkOtp = async (otp, username) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/checkOtp", {
        otp,
        number,
        username,
      });
      setUser(res.data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("user", JSON.stringify(res.data.user));

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

        {},
        {
          refresh: localStorage.getItem("refresh"),
        }
      );
      console.log(res.data);
    } catch {}
  };
  const resendOtp = async () => {
    console.log(number);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/resendOtp", {
        number: number,
      });
      toast.success("کد دوباره برای شما ارسال شد");
      console.log(res.data.data);
    } catch {
      console.log("ارسال مجدد با خطا روبرو شد!");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        checkOtp,
        number,
        user,
        access,
        refreshToken,
        newUser,
        resendOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
