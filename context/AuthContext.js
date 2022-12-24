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
  const [refresh, setRefresh] = useState(null);
  const router = useRouter();

  useEffect(() => {
    refreshToken();
  }, []);

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
      setRefresh(res.data.auth.refresh);
      console.log(refresh);
      router.push("/");
    } catch {}
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        "http://localhost:300/api/auth/refreshToken",
        {
          refresh: req.cookies.refresh,
        }
      );
      console.log(res.data.data);
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ login, checkOtp, number, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
