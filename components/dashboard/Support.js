import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container, Grid, Button } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRef } from "react";
const Support = () => {
  const [age, setAge] = useState("");
  const [supportChat, setSupportChat] = useState([
    {
      id: 496,
      type: "user",
      img: "/images/person-chat.png",
      text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
    },
    {
      id: 420,
      type: "admin",
      img: "/images/answer-chat.png",
      text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ",
    },
  ]);

  const [numberInput, setNumberInput] = useState([]);
  const buttonRef = useRef(null);
  const [text, setText] = useState("");
  const [objStyle, setObjStyle] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSupportInput = () => {
    if (text === "") return;
    let newObj = [
      ...supportChat,
      {
        id: Math.floor(Math.random() * 124654653),
        type: "user",
        img: "/images/person-chat.png",
        text: text,
      },
    ];
    setText("");
    setSupportChat(newObj);
  };

  const handleInput = () => {
    if (numberInput.length >= 4) return;
    let oldInner = buttonRef.current.innerHTML;
    let innerHtml = `${oldInner}
    <button>
    <label htmlFor="fileInput">
      انتخاب فایل :    
    </label>
    <input type="file" id="fileInput" />
  </button>
    `;
    buttonRef.current.innerHTML = innerHtml;
  };

  return (
    <>
      <Grid
        container
        sx={{
          width: {
            lg: "70%",
          },
        }}
      >
        <Grid item xs={12}>
          <h5>درخواست پشتیبانی</h5>

          <Box sx={{ width: "100%" }}>
            <input
              placeholder="موضوع"
              style={{
                fontFamily: "iranYekan",
                color: "black",
                border: "none",
                backgroundColor: "#eeeeee",
                padding: "0.5rem 0.8rem",
                outline: "none",
                borderRadius: "5px",
                width: "50vmin",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ my: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Box component={"div"}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "colors.white",
                  alignItems: "center",
                  borderRadius: "5px",
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{
                    "& fieldset": {
                      border: "1px solid rgba(0,0,0,0)",
                      padding: "0",
                    },
                    "& MuiInputBase-root:hover": {
                      border: "none",
                    },
                  }}
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label", padding: "0" }}
                    IconComponent={ExpandMoreIcon}
                    sx={{
                      "& .MuiSelect-select": {
                        width: "40.7vmin",
                        padding: "0.5rem 0",
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "row",
                      },
                      "& .MuiSelect-icon": {
                        right: "-2%",
                        top: "2px",
                        position: "relative",
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    <MenuItem
                      value=""
                      sx={{
                        mt: 2,
                      }}
                    >
                      انتخاب واحد مربوطه
                    </MenuItem>
                    <MenuItem value={10}>پشتیبانی</MenuItem>
                    <MenuItem value={20}>فروش</MenuItem>
                    <MenuItem value={30}>سئو</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <textarea
            placeholder="متن توضیح"
            style={{
              fontFamily: "iranYekan",
              width: "100%",
              resize: "none",
              outline: "none",
              border: "none",
              backgroundColor: "#eeeeee",
              padding: "1rem",
              borderRadius: "5px",
            }}
            rows={3}
          ></textarea>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              py: {
                xs: 2,
                md: 0,
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFFBDE",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                p: 1,
              }}
            >
              <Box
                width="16px"
                height="16px"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  backgroundColor: "#F6BA41",
                  mx: 1,
                  fontSize: "12px",
                }}
              >
                <CheckIcon
                  sx={{
                    color: "#FFFFFF",
                  }}
                />
              </Box>
              <span style={{ fontSize: "12px" }}>
                لطفا قبل از ارسال درخواست پشتیبانی سوالات متداول را مطالعه فرمایید
              </span>
            </Box>
            <Box>
              <Button
                sx={{
                  backgroundColor: "colors.pink",
                  whiteSpace: "nowrap",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#d1375c",
                  },
                  my: {
                    xs: 1,
                    md: 0,
                  },
                }}
              >
                ارسال درخواست
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        <Grid item>
          <h5>پرسش های متداول</h5>
          <div>
            <Accordion
              sx={{
                boxShadow: "none",
                mb: 1,
                "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
                  transform: "rotate(-90deg)",
                  color: "black",
                  fontSize: "1.5rem",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon sx={{ color: "black", fontSize: "1.5rem" }} />}
                sx={{ backgroundColor: "#E7F5F8", borderRadius: "5px" }}
              >
                <Box sx={{ display: "flex" }}>
                  <img
                    src={"/images/question.png"}
                    style={{ width: "25px", verticalAlign: "sub" }}
                  />
                  <Typography sx={{ pr: 2 }}>فرایند تسویه حساب در اچ دی گرافیک</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                mb: 1,
                "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
                  transform: "rotate(-90deg)",
                  color: "black",
                  fontSize: "1.5rem",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon sx={{ color: "black", fontSize: "1.5rem" }} />}
                sx={{ backgroundColor: "#E7F5F8", borderRadius: "5px" }}
              >
                <Box sx={{ display: "flex" }}>
                  <img
                    src={"/images/question.png"}
                    style={{ width: "25px", verticalAlign: "sub" }}
                  />
                  <Typography sx={{ pr: 2 }}>نحوه ثبت نام و خرید اشتراک</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                mb: 1,
                "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
                  transform: "rotate(-90deg)",
                  color: "black",
                  fontSize: "1.5rem",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowBackIosIcon sx={{ color: "black", fontSize: "1.5rem" }} />}
                sx={{ backgroundColor: "#E7F5F8", borderRadius: "5px" }}
              >
                <Box sx={{ display: "flex" }}>
                  <img
                    src={"/images/question.png"}
                    style={{ width: "25px", verticalAlign: "sub" }}
                  />
                  <Typography sx={{ pr: 2 }}>چرا طرح گرافیکی من نمایش داده نمی شود؟</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <h5>تیکت های ارسالی و دریافتی</h5>
          <Accordion
            sx={{
              border: "1px solid",
              borderColor: "colors.green",
              boxShadow: "none",
              borderRadius: "5px",
              mb: 1,
              "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
                transform: "rotate(-90deg)",
                color: "black",
                fontSize: "1.5rem",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowBackIosIcon sx={{ color: "black", fontSize: "1.5rem" }} />}
              sx={{ borderRadius: "5px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={"/images/question-p.png"}
                  style={{ width: "35px", verticalAlign: "sub" }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ pr: 2, fontSize: "15px", fontWeight: "bold" }}>
                    درخواست پشتیبانی 2
                  </Typography>
                  <Box sx={{ pr: 1, display: "flex", mt: 1, mb: 1, flexWrap: "wrap" }}>
                    <Box sx={{ fontSize: "12px", display: "flex", ml: 4 }}>
                      <Box
                        width="16px"
                        height="16px"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "100%",
                          backgroundColor: "#F6416C",
                          mx: 1,
                          fontSize: "12px",
                        }}
                      ></Box>
                      واحد شکایات
                    </Box>
                    <Box sx={{ fontSize: "12px", display: "flex" }}>
                      <Box
                        width="16px"
                        height="16px"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "100%",
                          backgroundColor: "#4ECCA3",
                          mx: 1,
                          fontSize: "12px",
                        }}
                      ></Box>
                      وضعیت : درحال پیگیری
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    pr: 10,
                    display: "flex",
                    fontSize: "12px",
                    alignItems: "end",
                    pb: 0.5,
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                  }}
                >
                  <Box sx={{ px: 1 }}>
                    <img src="/images/person-support.png" />
                  </Box>
                  <Typography>
                    آخرین پاسخ :{" "}
                    <span style={{ fontWeight: "bold" }}>امیر محمد ریحانی (مدیریت)</span>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pr: 10,
                    display: "flex",
                    fontSize: "12px",
                    alignItems: "end",
                    pb: 0.5,
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                  }}
                >
                  <span>تاریخ : 1401/02/09</span>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ borderTop: "1px solid", borderColor: "colors.green", p: 0 }}>
              {supportChat.map((e) => {
                return e.type === "user" ? (
                  <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                    <Box>
                      <img src={e.img} style={{ verticalAlign: "middle" }} />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#eeeeee",
                        py: 2,
                        mx: 1,
                        borderRadius: "3px",
                        width: {
                          xs: "100%",
                          lg: "75%",
                        },
                      }}
                    >
                      <Typography sx={{ lineHeight: "2.3", fontSize: "14px", px: 2 }}>
                        {e.text}
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center", p: 2, justifyContent: "end" }}>
                    <Box
                      sx={{
                        backgroundColor: "#eeeeee",
                        py: 2,
                        mx: 1,
                        borderRadius: "3px",
                        width: {
                          xs: "50%",
                          lg: "75%",
                        },
                      }}
                    >
                      <Typography sx={{ lineHeight: "2.3", fontSize: "14px", px: 2 }}>
                        {e.text}
                      </Typography>
                    </Box>
                    <Box>
                      <img src={e.img} style={{ verticalAlign: "middle" }} />
                    </Box>
                  </Box>
                );
              })}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  "&.MuiButtonBase-root input": {
                    m: 2,
                  },
                }}
              >
                <input
                  type={"text"}
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "#eeeeee",
                    width: "80%",
                    fontSize: "1rem",
                    fontFamily: "iranYekan",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                  placeholder="متن پاسخ"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <Button
                  sx={{
                    backgroundColor: "colors.pink",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#d1375c",
                    },
                    p: "10px",
                    mx: 1,
                    my: 1,
                  }}
                  onClick={() => handleSupportInput()}
                >
                  ارسال پاسخ
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#F6416C",
                    border: "none",
                    padding: "8px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#e33b63",
                    },
                  }}
                  onClick={() => {
                    setNumberInput(numberInput + 1);
                    handleInput();
                  }}
                >
                  <AddIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      fontSize: "1.4rem",
                    }}
                  />
                </Button>
              </Box>
              <Box
                ref={buttonRef}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "&.MuiBox-root button": {
                    backgroundColor: "transparent",
                    border: "none",
                    display: "flex",
                    fontFamily: "iranYekan",
                    p: 1,
                  },
                  "&.MuiBox-root label": {
                    px: 0.5,
                  },
                }}
              ></Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
};

export default Support;
