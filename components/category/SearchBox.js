import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Link, Typography } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, Containe, Button, Container, z } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GridViewIcon from "@mui/icons-material/GridView";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      "& fieldset": {
        border: "none",
        transition: "0.3s",
        overflow: "hidden",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ccc",
      },
      "&:hover fieldset": {
        border: "none",
      },
    },
  },
  root2: {
    "& .MuiInputBase-root": {
      "& fieldset": {
        border: "1px solid rgba(0,0,0,0)",
        padding: "0",
      },
    },
    "& .MuiSelect-select": {
      padding: "1px",
      marginLeft: "10px",
    },
    "& .MuiSelect-icon": {
      right: "-11px",
      position: "relative",
    },
    "& .MuiOutlinedInput-input": {
      paddingRight: "55px !important",
    },
  },
});

export default function SearchBox() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 16, display: "flex", justifyContent: "center" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
            }}
          >
            <Box component={"span"} sx={{ pt: 2, px: 2 }}>
              <Link href="#">
                <img src="images/hd-logo.png" />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} order={{ xs: 2 }}>
            <TextField
              className={classes.root}
              sx={{
                display: "flex",
                width: "100%",
                pr: 2,
                overflow: "hidden",
                backgroundColor: "colors.white",
                ".MuiOutlinedInput-root": { padding: "0 2px" },
                borderRadius: "5px",
              }}
              placeholder="جستجو برای..."
              type="text"
              variant="outlined"
              size="small"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              InputProps={{
                startAdornment: (
                  //   <>
                  //     <Link href="#">
                  //       <InputAdornment position="start">
                  //         <SearchIcon />
                  //       </InputAdornment>
                  //     </Link>
                  //   </>
                  <></>
                ),
                endAdornment: (
                  <>
                    <>
                      {value && (
                        <>
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setValue("")}
                          >
                            <CancelRoundedIcon />
                          </IconButton>
                        </>
                      )}
                    </>
                    <div className={classes.root2}>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          IconComponent={ExpandMoreIcon}
                        >
                          <MenuItem value="" sx={{ mt: 2 }}>
                            همه
                          </MenuItem>
                          <MenuItem value={10}>موکاپ</MenuItem>
                          <MenuItem value={20}>آیکون</MenuItem>
                          <MenuItem value={30}>تصاویر استوک</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <>
                      <Link
                        href="#"
                        sx={{
                          py: 2.5,
                          pl: 1,
                          backgroundColor: "#e6e6e6",
                          position: "relative",
                          right: "1px",
                          bottom: "-2px",
                        }}
                      >
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      </Link>
                    </>
                  </>
                ),
              }}
            />
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
                // mr: 3,
                "&:hover": {
                  backgroundColor: "#efefef",
                },
              }}
            >
              <GridViewIcon />
              <Typography sx={{ px: 2 }}>کلکسیون</Typography>
              <Typography
                sx={{
                  background: "#EEEEEE",
                  px: 1,
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
