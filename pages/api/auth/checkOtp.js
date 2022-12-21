import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(res.json({ massage: "OK" }));

    try {
      const resApi = await axios.post(
        "https://hdgraphic.ir/api/v1/users/auth/otp/access",
        {
          key: req.body.otp,
        }
      );
      console.log(resApi.data);
      // res.setHeader("Set-Cookie", [
      //   cookie.serialize("key", null, {
      //     httpOnly: true,
      //     secure: process.env.NODE_ENV !== "development",
      //     maxAge: -1,
      //     path: "/",
      //   }),
      //   cookie.serialize("access", resApi.data.access, {
      //     httpOnly: true,
      //     secure: process.env.NODE_ENV !== "development",
      //     maxAge: 60 * 60,
      //     path: "/",
      //   }),
      // ]);

      res.status(200).json({ massage: ":کدورود شما با  تایید شد" });

      console.log(resApi.data);
    } catch {
      res.status(405).json({ massage: "مشکلی هست" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
