import { Label } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Pagination,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useState } from "react";
const Filter = () => {
  const filterArray = [
    "بیشترین تخفیف",
    "ارزان ترین",
    "پر فروش ترین",
    "محبوب ترین",
  ];
  const itemArray = [
    {
      src: "eee.png",
    },
    {
      src: "eee.png",
    },
    {
      src: "eee.png",
    },
    {
      src: "eee.png",
    },
    {
      src: "eee.png",
    },
    {
      src: "eee.png",
    },
    {
      src: "eee.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "ewe.png",
    },
    {
      src: "asds.png",
    },
    {
      src: "asds.png",
    },
    {
      src: "asds.png",
    },
    {
      src: "asds.png",
    },
    {
      src: "asds.png",
    },
    {
      src: "asds.png",
    },
    {
      src: "asds.png",
    },
  ];
  const checkButtonArray = [
    {
      id: 0,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
    },
    {
      id: 1,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
    },
    {
      id: 2,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
    },
  ];
  
  const [checkButtonState, setCheckButton] = useState(checkButtonArray);
  const [priceFilter, setPriceFilter] = useState([
    "بیشترین تخفیف",
    "ارزان ترین",
    "بیشترین تخفیف",
    "ارزان ترین",
    "بیشترین تخفیف",
    "ارزان ترین",
  ]);
  const [item, setItem] = useState(itemArray);
  const checkArray = [
    { id: 0, display: "none" },
    { id: 1, display: "none" },
    { id: 2, display: "none" },
    { id: 3, display: "none" },
    { id: 4, display: "none" },
  ];
  const [checkDisplayState, setCheckDisplay] = useState(checkArray);
  const checkButton = (id) => {
    const copyCheckButtonState = [...checkButtonState];
    const findDisplay = copyCheckButtonState.find((a) => a.id == id);
    if (findDisplay.status) {
      (findDisplay.backColor = "white"),
        (findDisplay.color = "black"),
        (findDisplay.variant = "outlined"),
        (findDisplay.status = false);
    } else {
      (findDisplay.backColor = "colors.green"),
        (findDisplay.color = "white"),
        (findDisplay.variant = "contained"),
        (findDisplay.status = true);
    }
    setCheckButton(copyCheckButtonState);
  };
  const checkTik = (id) => {
    const copyCheckDisplay = [...checkDisplayState];
    const findDisplay = copyCheckDisplay.find((a) => a.id == id);
    if (findDisplay.display == "block") findDisplay.display = "none";
    else findDisplay.display = "block";
    setCheckDisplay(copyCheckDisplay);
  };
  const handleChange = (event) => {
    // if(!event)
    //   console.log("")
    console.log(event.target.value);

    event.target.value = false;
    console.log(event.target.value);
  }
  return (
    <>
      <Container maxWidth="xxl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEEEEE",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ ml: "10px" }}>
              <img src="/images/icon/filter.png" />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                تنظیمات
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography sx={{ color: "#AAAAAA" }}>
                تعداد 6500 طرح آماده
              </Typography>
            </Box>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={12} md={3} xl={2}>
            <Box
              height="60px"
              pr="25px"
              sx={{
                borderBottom: "1px solid #EEEEEE",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "colors.pink",
                  fontWeight: "bold",
                }}
              >
                فیلتر بر اساس :
              </Typography>
            </Box>
            <Box pr="10px" sx={{ borderBottom: "1px solid #EEEEEE" }}>
              <Box mt={'10px'} sx={{ display: "flex", flexWrap: "wrap", justifyContent:'space-evenly',}}>
                {priceFilter.map((item, i) => (
                  <Box
                    sx={{
                      minWidth: "92px",
                      my:'10px',
                      height: "31px",
                      borderRadius: "10px",
                      border: "1px solid #4ECCA3",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box m={1}>
                      <Typography fontSize={'15px'} fontWeight={0}>{item}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", m:'5px' }}>
                      <CloseIcon sx={{ color: "red", fontSize: "16px" }} />
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {filterArray.map((item, i) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox type={"checkbox"} value={true} onChange={(event) => handleChange(event)} sx={{ color: "#C2C2C2" }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              height="110px"
              pr="25px"
              mb="15px"
              sx={{
                borderBottom: "1px solid #EEEEEE",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box mb="15px" sx={{ display: "flex" }}>
                <Box sx={{ ml: "10px" }}>
                  <img wid src="/images/icon/color.png" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    رنگ
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    onClick={() => checkTik(0)}
                    width="20px"
                    height="20px"
                    mr="7px"
                    sx={{
                      borderRadius: "100%",
                      backgroundColor: "colors.black",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CheckIcon
                      fontSize="small"
                      sx={{
                        color: "#FFFFFF",
                        display: checkDisplayState[0].display,
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => checkTik(1)}
                    width="20px"
                    height="20px"
                    mr="7px"
                    sx={{
                      borderRadius: "100%",
                      backgroundColor: "colors.green",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CheckIcon
                      fontSize="small"
                      sx={{
                        color: "#FFFFFF",
                        display: checkDisplayState[1].display,
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => checkTik(2)}
                    width="20px"
                    height="20px"
                    mr="7px"
                    sx={{
                      borderRadius: "100%",
                      backgroundColor: "colors.white",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CheckIcon
                      fontSize="small"
                      sx={{
                        color: "#FFFFFF",
                        display: checkDisplayState[2].display,
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => checkTik(3)}
                    width="20px"
                    height="20px"
                    mr="7px"
                    sx={{
                      borderRadius: "100%",
                      backgroundColor: "colors.pink",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CheckIcon
                      fontSize="small"
                      sx={{
                        color: "#FFFFFF",
                        display: checkDisplayState[3].display,
                      }}
                    />
                  </Box>
                  <Box
                    onClick={() => checkTik(4)}
                    width="20px"
                    height="20px"
                    mr="7px"
                    sx={{
                      borderRadius: "100%",
                      backgroundColor: "colors.gray",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CheckIcon
                      fontSize="small"
                      sx={{
                        color: "#FFFFFF",
                        display: checkDisplayState[4].display,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              height="140px"
              pr="25px"
              sx={{
                borderBottom: "1px solid #EEEEEE",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", mb: "30px" }}>
                <Box sx={{ ml: "10px" }}>
                  <img src="/images/icon/license.png" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    لایسنس
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={() => checkButton(0)}
                  variant={checkButtonState[0].variant}
                  sx={{
                    backgroundColor: checkButtonState[0].backColor,
                    width: "68px",
                    height: "31px",
                    mx: "5px",
                    borderRadius: "5px",
                    borderColor: "#E1E1E1",
                    boxShadow: "0px 0px",
                    "&:hover": {
                      borderColor: "#E1E1E1",
                      backgroundColor: checkButtonState[0].backColor,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: checkButtonState[0].color,
                    }}
                  >
                    رایگان
                  </Typography>
                </Button>
                <Button
                  onClick={() => checkButton(1)}
                  variant={checkButtonState[1].variant}
                  sx={{
                    backgroundColor: checkButtonState[1].backColor,
                    width: "80px",
                    height: "31px",
                    mx: "5px",
                    borderRadius: "5px",
                    borderColor: "#E1E1E1",
                    boxShadow: "0px 0px",
                    "&:hover": {
                      borderColor: "#E1E1E1",
                      backgroundColor: checkButtonState[1].backColor,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: checkButtonState[1].color,
                    }}
                  >
                    اشتراکی
                  </Typography>
                </Button>
                <Button
                  onClick={() => checkButton(2)}
                  variant={checkButtonState[2].variant}
                  sx={{
                    backgroundColor: checkButtonState[2].backColor,
                    width: "41px",
                    height: "31px",
                    mx: "5px",
                    borderRadius: "5px",
                    borderColor: "#E1E1E1",
                    boxShadow: "0px 0px",
                    "&:hover": {
                      borderColor: "#E1E1E1",
                      backgroundColor: checkButtonState[2].backColor,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: checkButtonState[2].color,
                    }}
                  >
                    پولی
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              height="130px"
              pr="25px"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box mb="10px" sx={{ display: "flex" }}>
                <Box sx={{ ml: "10px" }}>
                  <img src="/images/icon/search.png" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    جستجو
                  </Typography>
                </Box>
              </Box>
              <Box>
                <TextField
                  sx={{ backgroundColor: "colors.white" }}
                  placeholder="جستجو در میان طرح های کاربر"
                  id="outlined-basic"
                  variant="outlined"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            xl={10}
            sx={{ borderRight: "1px solid #EEEEEE" }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {item.map((item, i) => (
                <Link href="#">
                  <Box sx={{ m: "5px" }}>
                    <img
                      style={{
                        maxWidth: "200px !important",
                        height: "200px !important",
                      }}
                      src={`/images/${item.src}`}
                      loading="lazy"
                    />
                  </Box>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack spacing={2}>
                <Pagination count={3} variant="outlined" shape="rounded" />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Filter;
