import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const resApi = await axios.post(
        "https://hdgraphic.ir/api/v1/users/auth/otp/access",
        {
          number: req.body.number,
          key: req.body.otp,
        }
      );
      console.log(resApi.data);
      res.setHeader("Set-Cookie", [
        cookie.serialize("key", null, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: -1,
          path: "/",
        }),
        cookie.serialize("access", resApi.data.auth.access, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60,
          path: "/",
        }),
        cookie.serialize("refresh", resApi.data.auth.refresh, {
          httpOnly: false,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 61,
          path: "/",
        }),
      ]);

      res.status(200).json({ user: resApi.data.user });
    } catch {
      res.status(405).json({ massage: "مشکلی هست" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
