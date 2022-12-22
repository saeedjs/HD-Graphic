import { Label } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Masonry from "@mui/lab/Masonry";
import Link from "next/link";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  ImageList,
  ImageListItem,
  Pagination,
  Radio,
  RadioGroup,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useState } from "react";
import { Mypagination } from "../Mypagination";
import ComponentTop from "../ComponentTop";
import ColorFilter from "./colorFilter";
const Filter = ({ category, colors }) => {
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
    {
      id: 0,
      status: false,
      value: "بیشترین تخفیف",
    },
    {
      id: 1,
      status: false,
      value: "ارزان ترین",
    },
    {
      id: 2,
      status: false,
      value: "پر فروش ترین",
    },
    {
      id: 3,
      status: false,
      value: "محبوب ترین",
    },
  ]);
  const checkButton = (id) => {
    const copyCheckButtonState = [...checkButtonState];
    const findDisplay = copyCheckButtonState.find((a) => a.id == id);
    if (findDisplay.status) {
      findDisplay.backColor = "white";
      findDisplay.color = "black";
      findDisplay.variant = "outlined";
      findDisplay.status = false;
    } else {
      findDisplay.backColor = "colors.green";
      findDisplay.color = "white";
      findDisplay.variant = "contained";
      findDisplay.status = true;
    }
    setCheckButton(copyCheckButtonState);
  };
  const handleChange = (id) => {
    const copyPriceFilter = [...priceFilter];
    const findDisplay = copyPriceFilter.find((a) => a.id == id);
    if (findDisplay.status) findDisplay.status = false;
    else findDisplay.status = true;
    setPriceFilter(copyPriceFilter);
  };
  return (
    <>
      <Container maxWidth="xxl">
        <ComponentTop ltitle={"تعداد 6500 طرح آماده"} rtitle={"تنظیمات"} />
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
              <Box
                mt={"10px"}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {priceFilter.map((item, i) => (
                  <>
                    {item.status ? (
                      <Box
                        sx={{
                          minWidth: "92px",
                          my: "10px",
                          height: "31px",
                          borderRadius: "10px",
                          border: "1px solid #4ECCA3",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Box m={1}>
                          <Typography fontSize={"15px"} fontWeight={0}>
                            {item.value}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            m: "5px",
                          }}
                        >
                          <CloseIcon
                            onClick={() => handleChange(i)}
                            sx={{
                              color: "red",
                              fontSize: "16px",
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {priceFilter.map((item, i) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      checked={item.status}
                      type={"checkbox"}
                      onChange={() => handleChange(i)}
                      sx={{ color: "#C2C2C2" }}
                    />
                    <Typography>{item.value}</Typography>
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
                <ColorFilter colors={colors} />
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
                <input
                  type="text"
                  style={{
                    width: "186px ",
                    height: "42px",
                    backgroundColor: "#EEEEEE",
                    borderRadius: "5px",
                    border: "none",
                    textAlign: "center",
                    "&:hover": {
                      border: "none",
                    },
                  }}
                  placeholder="جستجو در میان طرح های کاربر"
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
            <Box sx={{ height: "100%" }}>
              <Masonry
                columns={{ xl: 6, lg: 4, md: 3, sm: 3, xs: 1 }}
                spacing={0}
                sx={{ mt: "15px" }}
              >
                  {console.log(category)}

                {category.map((item, i) => (
                  <Link href={`/file/${item.slug}/${item.id}`}>
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: { md: "200px", sm: "180px", xs: "200px" },
                          height: { md: "200px", sm: "180px", xs: "200px" },
                        }}
                      >
                        <img
                          alt={item.alt}
                          style={{ height: "100%", width: "100%" }}
                          src={'https://hdgraphic.ir' + item.image}
                        />
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Masonry>
            </Box>
            <Box>
              <Mypagination />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Filter;