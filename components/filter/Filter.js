import { Label } from "@mui/icons-material";
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
import SearchFilter from "./SearchFilter";
import LicenseFilter from "./LicenseFilter";
import Complex from "./Complex";
const Filter = ({ category, colors }) => {
  const [categoryVals, setCategoryVals] = useState(
    category && category.items ? category.items : null
  );
  const [mount, setMount] = useState(
    category && category.extra ? category.extra : null
  );
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
            <Complex />
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
              <Box sx={{ display: "flex", mb: "15px" }}>
                <Box sx={{ ml: "10px" }}>
                  <img src="/images/icon/license.png" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    لایسنس
                  </Typography>
                </Box>
              </Box>
              <LicenseFilter />
            </Box>
            <SearchFilter />
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            xl={10}
            sx={{ borderRight:{md: "1px solid #EEEEEE"} }}
          >
            <Box sx={{ height: "100%" }}>
              {categoryVals ? (
                <Masonry
                  columns={{ xl: 6, lg: 4, md: 3, sm: 3, xs: 1 }}
                  spacing={0}
                  sx={{ mt: "15px" }}
                >
                  {categoryVals.map((item, i) => (
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
                            src={"https://hdgraphic.ir" + item.image}
                          />
                        </Box>
                      </Box>
                    </Link>
                  ))}
                </Masonry>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>محصولی موجود نیست</Typography>
                </Box>
              )}
            </Box>
            <Box>
              <Mypagination mount={mount ? mount : null} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Filter;
