import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const CheckOtp = () => {
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);

  const { checkOtp, newUser, resendOtp } = useContext(AuthContext);

  const [timer, setTimer] = useState("");
  const [loadingResend, setLoadingResend] = useState(false);

  useEffect(() => {
    let time = "00:59";
    let interval = setInterval(() => {
      let countdown = time.split(":");
      let minutes = parseInt(countdown[0], 10);
      let seconds = parseInt(countdown[1], 10);
      --seconds;
      minutes = seconds < 0 ? --minutes : minutes;
      if (minutes < 0) {
        clearInterval(interval);
        setShow(true);
      }
      seconds = seconds < 0 ? 59 : seconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      time = minutes + ":" + seconds;
      setTimer(time);
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimer("");
    };
  }, [loadingResend]);

  async function handleSubmit() {
    if (otp == "") {
      console.log("کد تایید الزامی است!");
      return;
    }
    // const usernameReg =
    //   /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
    // if (usernameReg.test(username)) {
    //   toast.error("فرمت نام کاربری اشتباه است");
    //   return;
    // }
    // const mobileReg =
    //   /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    // if (!mobileReg.test(cellphone)) {
    //   console.log("فرمت شماره موبایل نادرست است");
    //   return;
    // }
    await checkOtp(otp, username);
  }
  const handleResendOtp = async () => {
    setLoadingResend(true);
    await resendOtp();
    setLoadingResend(false);
    setShow(false);
  };

  return (
    <>
      {newUser ? (
        <>
          <h1> کد ورود</h1>
          <input
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            name=""
            id=""
            placeholder="کد تایید وارد کنید"
          />
          <h1>نام کاربری</h1>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            name=""
            id=""
            placeholder="نام کاربری"
          />
        </>
      ) : (
        <>
          <h1> کد ورود</h1>
          <input
            type="text"
            onChange={(e) => setOtp(e.target.value)}
            name=""
            id=""
            placeholder="کد تایید وارد کنید"
          />
        </>
      )}

      <button onClick={() => handleSubmit()}>تایید کد</button>
      {show ? (
        <button
          onClick={handleResendOtp}
          disabled={loadingResend}
          className="btn btn-dark"
        >
          ارسال دوباره
          {loadingResend && (
            <div className="spinner-border spinner-border-sm ms-2"></div>
          )}
        </button>
      ) : (
        <div className="mt-3">{timer}</div>
      )}
    </>
  );
};

export default CheckOtp;
