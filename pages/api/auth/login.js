import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const resApi = await axios.post(
        "https://hdgraphic.ir/api/v1/users/auth/otp",
        {
          number: req.body.cellphone,
        }
      );
      res.setHeader(
        "Set-Cookie",
        cookie.serialize(
          "key",
          resApi.data.key,

          {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60,
            path: "/",
          }
        )
      );

      res.status(200).json({ massage: ":کدورود شما با موفقیت ارسال شد" });

      console.log(resApi.data);
    } catch {
      res.status(405).json({ massage: "مشکلی هست" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
