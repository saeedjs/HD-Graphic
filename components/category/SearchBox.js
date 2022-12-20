import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Link } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ my: 3, display: "flex", justifyContent: "center", width: "100%" }}>
        <Grid container>
          <Grid
            item
            xs={6}
            md={2}
            order={{ xs: 1 }}
            sx={{
              mb: {
                xs: 5,
                md: 0,
              },
              mt: 1,
            }}
          >
            <Box component={"span"} sx={{ pt: 2, px: 2 }}>
              <Link href="#">
                <img src="/images/hd-logo.png" />
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            order={{
              xs: 4,
              md: 2,
            }}
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f2f2f2",
              alignItems: "center",
              borderRadius: "5px",
              width: {
                xs: "100%",
                sm: "70%",
                md: "55%",
              },
              justifyContent: "space-between",
            }}
          >
            <Box component={"div"} sx={{ display: "flex", width: "200%" }}>
              <input
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "1rem",
                  width: "200%",
                  fontFamily: "iranYekan",
                  paddingRight: "15px",
                }}
                placeholder="جستجو کلمه کلیدی..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              {value && (
                <>
                  <span
                    style={{
                      position: "relative",
                      zIndex: "1000",
                      backgroundColor: "colors.white",
                    }}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setValue("")}
                      sx={{
                        fontSize: "1.2rem",
                        position: "absolute",
                        right: "-20px",
                        top: "-5px",
                        zIndex: 1000,
                      }}
                    >
                      <CancelRoundedIcon />
                    </IconButton>
                  </span>
                </>
              )}
            </Box>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
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
                      padding: "1px",
                      justifyContent: "center",
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
                    همه
                  </MenuItem>
                  <MenuItem value={10}>موکاپ</MenuItem>
                  <MenuItem value={20}>آیکون</MenuItem>
                  <MenuItem value={30}>تصاویر استوک</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                backgroundColor: "#e6e6e6",
                paddind: "4px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px 0 0 10px",
                textAlign: "center",
              }}
            >
              <Link
                href="#"
                sx={{ display: "flex", color: "colors.gray", fontSize: "2rem", pl: 1 }}
              >
                <SearchIcon />
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={2}
            order={{ xs: 1, md: 3 }}
            sx={{
              mb: {
                xs: 5,
                md: 0,
              },
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton
              sx={{
                border: "1px solid #EEEEEE",
                borderRadius: "2px",
                p: 1,
                px: 2,

                "&:hover": {
                  backgroundColor: "#efefef",
                },
              }}
            >
              <img src="/images/icon-collection.png" />
              {/* <GridViewIcon /> */}
              <Typography sx={{ px: 2 }}>کلکسیون</Typography>
              <Typography
                sx={{
                  background: "#EEEEEE",
                  px: 1,
                  display: "flex",
                  alignItems: "end",
                  borderRadius: "50px",
                  height: "24px",
                  width: "24px",
                }}
              >
                3
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
