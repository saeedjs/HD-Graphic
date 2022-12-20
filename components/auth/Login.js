import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [cellphone, setCellphone] = useState();

  const { login } = useContext(AuthContext);

  async function handleSubmit() {
    if (cellphone == "") {
      console.log("شماره تلفن وارد کنید");
      return;
    }

    // const mobileReg =
    //   /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    // if (!mobileReg.test(cellphone)) {
    //   console.log("فرمت شماره موبایل نادرست است");
    //   return;
    // }
    await login(cellphone);
  }

  return (
    <>
      <h1>صفحه ورود</h1>
      <input
        type="text"
        onChange={(e) => setCellphone(e.target.value)}
        name=""
        id=""
        placeholder="شماره تلفن خودرا وارد کنید"
      />
      <button onClick={() => handleSubmit()}>ورود</button>
    </>
  );
};

export default Login;
