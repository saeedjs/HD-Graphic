import { useState } from "react";
import CheckOtp from "../../components/auth/CheckOtp";
import Login from "../../components/auth/Login";

const LoginPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step == 1 && <Login setStep={setStep} />}
      {step == 2 && <CheckOtp />}
    </div>
  );
};
export default LoginPage;
