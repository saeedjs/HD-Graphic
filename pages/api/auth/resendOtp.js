import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const resApi = await axios.post(
        "https://hdgraphic.ir/api/v1/users/auth/otp/resend",
        {
          number: req.body.number,
        }
      );
      console.log(resApi.data);

      res.status(200).json({
        key: res.data.key,
      });
    } catch {
      res.status(405).json({ massage: "مشکلی هست" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
