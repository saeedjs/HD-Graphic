const handleError = (req, res) => {
  if (res.status == 200) {
    console.log("anything ok");
  } else if (res.status == 404) {
    console.log("not found!");
  } else if (res.status >= 500) {
    console.log("خطای سرور");
  }
};

export default handleError;
