import axios from "axios";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req);
    console.log(req.body);
    try {
      const resApi = await axios.post(
        "https://hdgraphic.ir/api/v1/users/auth/otp/resend",
        {
          number: req.body.number,
        }
      );
      console.log(resApi.data);

      res.status(200).json({
        data: resApi.data.key,
      });
    } catch {
      res.status(405).json({ massage: "مشکلی هست" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
