export default async function handler(req, res) {
  if (req.method == "POST") {
    res.status(200).json({ massage: "OK" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ massage: `Mehtode ${req.methode} not allowed` });
  }
}
