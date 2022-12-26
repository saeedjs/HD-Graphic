import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  var cookies = cookie.parse(req.headers.cookie || "");

  if (req.method == "POST") {
    if (!localStorage.getItem("access")) {
      try {
        const resApi = await axios.post(
          "https://hdgraphic.ir/api/v1/users/auth/otp/refresh",
          {
            refresh: req.body.refresh,
          }
        );
        console.log(resApi.data);
        res.setHeader("Set-Cookie", [
          cookie.serialize("access", resApi.data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            path: "/",
          }),
        ]);

        res.status(200).json({ data: resApi.data });
      } catch {
        res.status(405).json({ massage: "مشکلی هست" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
