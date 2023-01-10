import { Button, ButtonBase, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Link from "next/link";
import SearchBox from "../category/SearchBox";
import { numberFormat } from "../../lib/helper";
import { useContext, useEffect } from "react";
import handleError from "../../lib/handleerror";
import axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TitleComponents from "../TitleComponents";
import React from "react";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  border: "2px solid #EEEEEE",
  boxShadow: 24,
  p: 4,
};

const SingleProduct = ({ DetailProduct, creator }) => {
  // for input colliction
  const [age, setAge] = React.useState("");
  const [liked, setLiked] = React.useState(false);
  const [user, setUser] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  {
    console.log(
      "this is a badrequast fo erro 401 this not authrithin how is for in the  big status npm run dev for everyone and comeon for ever "
    );
    console.log("this going how are you?");
  }

  // for modal colliction
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // for access download
  const [access, setAccess] = useState("");
  const [download, setDownload] = useState("");

  useEffect(() => {
    setAccess(localStorage.getItem("access"));
    setUser(localStorage.getItem("user"));
    console.log(user);

    if (localStorage.getItem(`liked_${DetailProduct.id}`)) {
      setLiked(true);
    }
    // if (DetailProduct.user_liked.find(handleLikedfun)) {
    //   setLiked(true);
    // } else {
    //   setLiked(false);
    // }
  }, []);
  axios
    .post(
      `https://hdgraphic.ir/api/v1/users/access-download/${DetailProduct.token}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${access}
  `,
        },
      }
    )
    .then((response) => {
      setDownload(response.data.data);

      // console.log("response", response.data);
      console.log(download);
    })
    .catch((error) => {
      setDownload("");
      console.log("error", error.response);
    });

  // handle share btn

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک فایل کپی شد");
  };
  // handle add to card
  const handelAddToCart = () => {
    axios
      .post(
        `https://hdgraphic.ir/api/v1/cart/add-to-cart/${DetailProduct.id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${access}
            `,
          },
        }
      )
      .then((response) => {
        console.log(response.data.massage);
        console.log("به سبد خرید اضافه شد");
      })
      .catch((error) => {
        console.log("error", error.response);

        toast.error(error.response.data.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  // handle liked button
  const handleLiked = async (id) => {
    axios
      .post(
        `https://hdgraphic.ir/api/v1/users/like-file/${DetailProduct.token}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${access}
          `,
          },
        }
      )
      .then((result) => {
        console.log(result.data.like);
        setLiked(result.data.like);
        console.log(result);
        console.log("لایک انجام شد!");
      })
      .catch((err) => {
        console.log("لایک انجام نشد!");
      });

    setLiked(!liked);
    localStorage.setItem(`liked_${id}`, !liked);
    const resLiked = await axios.post("https://hdgraphic.ir/api/v1");
  };

  let req = {
    name: "ali",
  };
  let res = {
    status: 404,
    massage: "ok",
  };

  useEffect(() => {
    handleError(req, res);
  }, []);

  return (
    <>
      <SearchBox />
      <Box sx={{ borderBottom: "1px solid #E5E5E5 " }}></Box>

      <Container
        sx={{
          marginBottom: "30px",
        }}
      >
        <Grid
          container
          style={{
            borderBottom: "1px solid #E5E5E5",
            paddingBottom: "50px",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "33px",
              flexDirection: "column",
              marginLeft: {
                md: "20px",
                lg: "90px",
              },
            }}
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <img
              style={{
                maxWidth: "100%",
                height: "85%",
                padding: "0",
                marginRight: "0px",
              }}
              src={`https://hdgraphic.ir/${DetailProduct.watermarked_image}`}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "90%",
                justifyContent: "space-between",
                alignItems: "space-between",
                marginTop: "40px",
                // m: 1,
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ my: 1 }} componen={"div"}>
                <svg
                  id="_3916699"
                  data-name="3916699"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  style={{
                    marginBottom: "-5px",
                  }}
                >
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm0,20.167A9.167,9.167,0,1,1,20.167,11,9.167,9.167,0,0,1,11,20.167Z"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z"
                    transform="translate(-1 -1.333)"
                  />
                  <circle
                    id="Ellipse_20"
                    data-name="Ellipse 20"
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="translate(9.5 4.524)"
                  />
                </svg>
                <span> گزارش مشکلات دانلود فایل</span>
              </Typography>
              <Typography sx={{ my: 1 }}>
                تعداد دانلود:{DetailProduct.download}
              </Typography>
              <Typography sx={{ my: 1 }}>
                بازدید:{DetailProduct.views}
              </Typography>
              <Typography sx={{ my: 1 }}>
                پسندیده شده:{DetailProduct.like}
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 5,
                display: "flex",
              }}
            >
              <Button
                onClick={() => handleShare()}
                sx={{
                  width: "30%",
                  height: "43px",
                  backgroundColor: "white",
                  whiteSpace: "nowrap",
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "10px",
                  border: "1px solid #C2C2C2",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="_3917574"
                    data-name="3917574"
                    d="M16.088,12.222a3.878,3.878,0,0,0-3.2,1.687L7.474,11.459a3.815,3.815,0,0,0,0-2.906l5.41-2.461a3.884,3.884,0,1,0-.688-2.2,3.865,3.865,0,0,0,.067.655L6.516,7.16A3.888,3.888,0,1,0,6.5,12.849l5.767,2.606a3.951,3.951,0,0,0-.066.654,3.885,3.885,0,1,0,3.884-3.888Zm0-10.555a2.222,2.222,0,1,1-2.219,2.222,2.221,2.221,0,0,1,2.219-2.222ZM3.88,12.222A2.222,2.222,0,1,1,6.1,10,2.221,2.221,0,0,1,3.88,12.222Zm12.208,6.11a2.222,2.222,0,1,1,2.22-2.222,2.221,2.221,0,0,1-2.22,2.222Z"
                    transform="translate(0.027 0.001)"
                  />
                </svg>{" "}
                <span
                  style={{
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  اشتراک گذاری
                </span>
              </Button>
              {!liked ? (
                <Button
                  onClick={() => handleLiked(DetailProduct.id)}
                  sx={{
                    width: "30%",
                    height: "43px",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                    marginRight: "10px",
                    border: "1px solid #C2C2C2",
                  }}
                >
                  <svg
                    id="_01_align_center"
                    data-name="01 align center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                  >
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M14.577.917A5.318,5.318,0,0,0,10,3.717,5.318,5.318,0,0,0,5.414.917,5.728,5.728,0,0,0,0,6.9C0,12.648,9.125,19.288,9.514,19.57l.481.347.481-.347c.388-.28,9.514-6.922,9.514-12.671A5.728,5.728,0,0,0,14.577.917ZM10,17.828C7.285,15.766,1.665,10.7,1.665,6.9A4.047,4.047,0,0,1,5.414,2.614,4.047,4.047,0,0,1,9.162,6.9h1.666a4.047,4.047,0,0,1,3.748-4.285A4.047,4.047,0,0,1,18.325,6.9C18.325,10.7,12.7,15.766,10,17.828Z"
                      transform="translate(0.005 -0.917)"
                      fill="#232931"
                    />
                  </svg>{" "}
                  <span
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    پسندیدم
                  </span>
                </Button>
              ) : (
                <Button
                  onClick={() => handleLiked(DetailProduct.id)}
                  sx={{
                    width: "30%",
                    height: "43px",
                    backgroundColor: "red",
                    color: "black",
                    fontWeight: "bold",
                    marginRight: "10px",
                    border: "1px solid #C2C2C2",
                  }}
                >
                  <svg
                    id="_01_align_center"
                    data-name="01 align center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                  >
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M14.577.917A5.318,5.318,0,0,0,10,3.717,5.318,5.318,0,0,0,5.414.917,5.728,5.728,0,0,0,0,6.9C0,12.648,9.125,19.288,9.514,19.57l.481.347.481-.347c.388-.28,9.514-6.922,9.514-12.671A5.728,5.728,0,0,0,14.577.917ZM10,17.828C7.285,15.766,1.665,10.7,1.665,6.9A4.047,4.047,0,0,1,5.414,2.614,4.047,4.047,0,0,1,9.162,6.9h1.666a4.047,4.047,0,0,1,3.748-4.285A4.047,4.047,0,0,1,18.325,6.9C18.325,10.7,12.7,15.766,10,17.828Z"
                      transform="translate(0.005 -0.917)"
                      fill="#232931"
                    />
                  </svg>{" "}
                  <span
                    style={{
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    پسندیده شده
                  </span>
                </Button>
              )}
            </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: {
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              },
              flexDirection: "column",
              padding: "20px",
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={4.8}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  lg: "start",
                },
                justifyContent: "center",
                widht: "100%",
                marginBottom: "25px",
              }}
            >
              <Typography
                xs={4}
                sm={6}
                md={4}
                lg={5}
                variant={"h1"}
                sx={{
                  marginTop: "15px",
                  marginBottom: "20px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {DetailProduct.title}
              </Typography>
              <Typography
                sx={{
                  width: {
                    xs: "75%",
                    lg: "100%",
                  },
                  fontSize: "15px",
                  marginBottom: "30px",
                  textAlign: {
                    xs: "center",
                    lg: "start",
                  },
                }}
                variant="h6"
                color="initial"
              >
                {DetailProduct.de}
              </Typography>
              <Typography
                component={"div"}
                sx={{
                  marginBottom: "32px",
                }}
              >
                <svg
                  id="_3917317"
                  data-name="3917317"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  style={{
                    marginBottom: "-5px",
                  }}
                >
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M17.417,0H4.583A4.589,4.589,0,0,0,0,4.583V17.417A4.589,4.589,0,0,0,4.583,22H17.417A4.589,4.589,0,0,0,22,17.417V4.583A4.589,4.589,0,0,0,17.417,0ZM4.583,1.833H17.417a2.75,2.75,0,0,1,2.75,2.75V17.417a2.705,2.705,0,0,1-.275,1.178l-8.4-8.4a4.583,4.583,0,0,0-6.483,0L1.833,13.37V4.583a2.75,2.75,0,0,1,2.75-2.75Zm0,18.333a2.75,2.75,0,0,1-2.75-2.75V15.963L6.3,11.491a2.75,2.75,0,0,1,3.89,0l8.4,8.4a2.705,2.705,0,0,1-1.178.275Z"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"
                    transform="translate(-1.471 0.538)"
                  />
                </svg>
                <span style={{ margin: "10px" }}>فرمت فایل:Eps,PSD</span>
              </Typography>
              {DetailProduct.is_free ? (
                <Typography
                  sx={{
                    marginBottom: "32px",
                  }}
                >
                  رایگان
                </Typography>
              ) : (
                <Typography
                  component={"div"}
                  sx={{
                    marginBottom: "32px",
                  }}
                >
                  قیمت:
                  <span style={{ margin: "10px" }}>
                    {numberFormat(DetailProduct.price)} تومان
                  </span>
                </Typography>
              )}
              <Box
                sx={{
                  border: 1,
                  borderColor: "#E2E2E2",
                  minWidth: {
                    xs: "60%",
                    lg: "98%",
                  },
                  height: "110px",
                  backgroundColor: "#F8F8F8",
                  borderRadius: "10px",
                  mr: 1,
                  padding: "5px",
                }}
              >
                <Link href={`https://iranarmaghan.ir/products/`}>
                  <Box sx={{ display: "flex", height: "100%" }}>
                    <Box
                      xs={12}
                      sm={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        m: 1,
                      }}
                    >
                      <Box>
                        <img
                          maxWidth="84px"
                          height="84px"
                          src={`https://hdgraphic.ir/${DetailProduct.watermarked_image}`}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography color={"colors.pink"}>
                        سفارش چاپ همین حالا {"      "} !{" "}
                      </Typography>
                      <Typography
                        fontSize={14}
                        color={"#C2C2C2"}
                        sx={{ mt: 2, mr: 1.5 }}
                        fontWeight={"small"}
                      >
                        شما می توانید همین فایل را چاپ نمایید
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  border: "1px solid #b4b4b4",
                  brordeColor: "#E2E2E2",
                  minWidth: {
                    xs: "50%",
                    lg: "90%",
                  },
                  height: "130px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  mt: 1,
                  mr: 1,
                  padding: "5px",
                }}
              >
                <Box sx={{ display: "flex", height: "100%" }}>
                  <Box
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden",
                      flexDirection: "column",
                      m: 1.5,
                    }}
                  >
                    <Box>
                      <img
                        maxWidth="84px"
                        height="84px"
                        src={`https://hdgraphic.ir/${creator.image}`}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                      }}
                      color={"#CBCBCB"}
                    >
                      تعداد طرح:{creator.files_count}
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        overFlow: "hidden",
                      }}
                    >
                      <Typography
                        xs={12}
                        sm={6}
                        md={12}
                        sx={{
                          fontSize: "14px",
                          fontWeight: "1000",
                          pt: "10px",
                          color: "colors.green",
                        }}
                      >
                        طراح:{creator.name}
                      </Typography>
                      <Link href="#">
                        <Typography
                          sx={{
                            mt: "8px",
                            p: 0.5,
                            borderRadius: "10px",
                            ml: 1.5,
                            fontSize: "15px",
                            backgroundColor: "colors.white",
                          }}
                        >
                          مشاهده
                        </Typography>
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        height: "75%",
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "start",
                        overFlow: "hidden",
                      }}
                    >
                      <Typography
                        component={"h3"}
                        sx={{
                          width: "100%",

                          fontSize: "8px",
                          margin: "-20px",
                          marginLeft: "12px",
                          marginRight: "12px",
                          textOverflow: " ellipsis",
                          p: "8px",
                          fontSize: {
                            xs: "10px",
                            lg: "14px",
                          },
                        }}
                        dangerouslySetInnerHTML={{ __html: creator.desc }}
                      ></Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button
              onClick={handleOpen}
              sx={{
                width: "90%",
                height: "50px",
                backgroundColor: "#EEEEEE",
                color: "colors.black",
                fontWeight: "bold",
                marginRight: "10px",
                m: 1,
              }}
            >
              <span
                style={{
                  marginLeft: "16px",
                }}
              >
                {" "}
                افزودن به کلکسیون
              </span>
              <svg
                id="_01_align_center"
                data-name="01 align center"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
              >
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M0,2.727V10H10V0H2.727A2.727,2.727,0,0,0,0,2.727ZM8.182,8.182H1.818V2.727a.909.909,0,0,1,.909-.909H8.182Z"
                  fill="#393e46"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M0,20.273A2.727,2.727,0,0,0,2.727,23H10V13H0Zm1.818-5.455H8.182v6.364H2.727a.909.909,0,0,1-.909-.909Z"
                  transform="translate(0 -2)"
                  fill="#393e46"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M13,13V23h7.273A2.727,2.727,0,0,0,23,20.273V13Zm8.182,7.273a.909.909,0,0,1-.909.909H14.818V14.818h6.364Z"
                  transform="translate(-1 -2)"
                  fill="#393e46"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M17,11h2V7h4V5H19V1H17V5H13V7h4Z"
                  transform="translate(-1 -1)"
                  fill="#393e46"
                />
              </svg>
            </Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  کلکسیون مورد نظر را انتخاب کنید!
                </Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel
                    sx={{ width: "100%" }}
                    id="demo-simple-select-standard-label"
                  >
                    کلکسیون مورد نظر
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>انتخاب کنید</em>
                    </MenuItem>
                    <MenuItem value={10}>تصاویر استوک</MenuItem>
                    <MenuItem value={20}>موکاپ</MenuItem>
                    <MenuItem value={30}>قالب اینستاگرام های من</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Modal>
            {DetailProduct.only_subscribe ? (
              <Link href={"/plans"}>
                <Button
                  sx={{
                    width: "90%",
                    height: "50px",
                    backgroundColor: "colors.pink",
                    color: "white",
                    fontWeight: "bold",
                    marginRight: "10px",
                    m: 1,
                    "&:hover": {
                      border: "1px solid ",
                      color: "colors.pink",
                      backgroundColor: "white",
                    },
                    "&:hover svg path": {
                      fill: "#F6416C",
                    },
                  }}
                >
                  <span
                    style={{
                      marginLeft: "16px",
                    }}
                  >
                    {" "}
                    خرید اشتراک
                  </span>
                  <svg
                    id="_3917330"
                    data-name="3917330"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M9.878,16.215a3.255,3.255,0,0,0,4.244,0l3.211-2.873a.828.828,0,0,0-.035-1.233,1.087,1.087,0,0,0-1.379-.029L12.993,14.7,13,.895A.952.952,0,0,0,12,0h0a.952.952,0,0,0-1,.895l-.009,13.786-2.91-2.6a1.085,1.085,0,0,0-1.415,0,.83.83,0,0,0,0,1.266Z"
                      transform="translate(-0.997)"
                      fill="#fff"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M21.083,16h0a.961.961,0,0,0-.917,1v4a.961.961,0,0,1-.917,1H2.75a.961.961,0,0,1-.917-1V17a.961.961,0,0,0-.917-1h0A.961.961,0,0,0,0,17v4a2.883,2.883,0,0,0,2.75,3h16.5A2.883,2.883,0,0,0,22,21V17A.961.961,0,0,0,21.083,16Z"
                      transform="translate(0 -4)"
                      fill="#fff"
                    />
                  </svg>
                </Button>
              </Link>
            ) : download == "" ? (
              <Button
                onClick={() => handelAddToCart()}
                sx={{
                  width: "90%",
                  height: "50px",
                  backgroundColor: "colors.pink",
                  color: "white",
                  fontWeight: "bold",
                  marginRight: "10px",
                  m: 1,
                  "&:hover": {
                    border: "1px solid ",
                    color: "colors.pink",
                    backgroundColor: "white",
                  },
                  "&:hover svg path": {
                    fill: "#F6416C",
                  },
                }}
              >
                <span
                  style={{
                    marginLeft: "16px",
                  }}
                >
                  {" "}
                  افزودن به سبد خرید
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Button>
            ) : (
              <Link href={download == "" ? "#" : download} download>
                <Button
                  sx={{
                    width: "90%",
                    height: "50px",
                    backgroundColor: "colors.pink",
                    color: "white",
                    fontWeight: "bold",
                    marginRight: "10px",
                    m: 1,
                    "&:hover": {
                      border: "1px solid ",
                      color: "colors.pink",
                      backgroundColor: "white",
                    },
                    "&:hover svg path": {
                      fill: "#F6416C",
                    },
                  }}
                >
                  <span
                    style={{
                      marginLeft: "16px",
                    }}
                  >
                    {" "}
                    دانلود فایل با کیفیت بالا
                  </span>
                  <svg
                    id="_3917330"
                    data-name="3917330"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M9.878,16.215a3.255,3.255,0,0,0,4.244,0l3.211-2.873a.828.828,0,0,0-.035-1.233,1.087,1.087,0,0,0-1.379-.029L12.993,14.7,13,.895A.952.952,0,0,0,12,0h0a.952.952,0,0,0-1,.895l-.009,13.786-2.91-2.6a1.085,1.085,0,0,0-1.415,0,.83.83,0,0,0,0,1.266Z"
                      transform="translate(-0.997)"
                      fill="#fff"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M21.083,16h0a.961.961,0,0,0-.917,1v4a.961.961,0,0,1-.917,1H2.75a.961.961,0,0,1-.917-1V17a.961.961,0,0,0-.917-1h0A.961.961,0,0,0,0,17v4a2.883,2.883,0,0,0,2.75,3h16.5A2.883,2.883,0,0,0,22,21V17A.961.961,0,0,0,21.083,16Z"
                      transform="translate(0 -4)"
                      fill="#fff"
                    />
                  </svg>
                </Button>
              </Link>
            )}
          </Grid>
        </Grid>
        <Typography
          component={"div"}
          sx={{
            padding: "10px",
          }}
        >
          <span
            style={{
              marginLeft: "13px",
            }}
          >
            برچسب های مرتبط
          </span>

          <Button
            component={"div"}
            variant="contained"
            width="48px"
            height="30px"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #4ECCA3",
              borderRadius: "10px",
              boxShadow: "none",
              m: 1,
              "&:hover ": {
                color: "white",
                backgroundColor: "colors.green",
              },
              "&:hover svg path": {
                fill: "white",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                id="_3917132"
                data-name="3917132"
                d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                transform="translate(0.032 0.032)"
                fill="#4ecca3"
              />
            </svg>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              {" "}
              {DetailProduct.tags.map((item) => {
                return (
                  <>
                    <Link href={`/files/tag/${item.slug}`}>
                      <Button
                        variant="contained"
                        width="48px"
                        height="30px"
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          border: "1px solid #4ECCA3",
                          borderRadius: "10px",
                          boxShadow: "none",
                          m: 1,
                          "&:hover ": {
                            color: "white",
                            backgroundColor: "colors.green",
                          },
                          "&:hover svg path": {
                            fill: "white",
                          },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 16 16"
                        >
                          <path
                            id="_3917132"
                            data-name="3917132"
                            d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                            transform="translate(0.032 0.032)"
                            fill="#4ecca3"
                          />
                        </svg>
                        <span
                          style={{
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          {item.title}
                        </span>
                      </Button>
                    </Link>
                  </>
                );
              })}
            </span>
          </Button>
        </Typography>
        <TitleComponents title={`بیشتر با طراح ${creator.name}`} />{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: "center",
            }}
            maxWidth="xl"
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                mr: 1,
                p: 1,
              }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              {DetailProduct.related_files.map((item) => {
                return (
                  <Link
                    href={`http://localhost:3000/file/${encodeURI(item.slug)}/${
                      item.id
                    }`}
                  >
                    <img
                      src={`https://hdgraphic.ir/${item.image}`}
                      style={{
                        margin: "4px",
                        height: "300px",
                        width: "auto",
                      }}
                    />
                  </Link>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default React.memo(SingleProduct);
