import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const CheckOtp = () => {
  const [otp, setOtp] = useState();

  const { checkOtp } = useContext(AuthContext);

  async function handleResend() {}

  async function handleSubmit() {
    if (otp == "") {
      console.log("کد تایید الزامی است!");
      return;
    }

    // const mobileReg =
    //   /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    // if (!mobileReg.test(cellphone)) {
    //   console.log("فرمت شماره موبایل نادرست است");
    //   return;
    // }
    await checkOtp(otp);
  }

  return (
    <>
      <h1> کد ورود</h1>
      <input
        type="text"
        onChange={(e) => setOtp(e.target.value)}
        name=""
        id=""
        placeholder="کد تایید وارد کنید"
      />
      <button onClick={() => handleSubmit()}>ارسال</button>
      <button onClick={() => handleResend()}>ارسال مجدد کد</button>
    </>
  );
};

export default CheckOtp;
