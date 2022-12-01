import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Link } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, Container } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      "& fieldset": {
        border: "1px solid #ccc",
        transition: "0.3s",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ccc",
      },
      "&:hover fieldset": {
        border: "1px solid #ccc",
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
      paddingRight: "40px",
      marginLeft: "10px",
    },
    "& .MuiSelect-icon": {
      right: "-38px",
      position: "relative",
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
        <TextField
          className={classes.root}
          sx={{
            display: "flex",
            width: {
              xs: "87%",
              md: "50%",
            },
            backgroundColor: "colors.white",
            ".MuiOutlinedInput-root": { padding: "0 2px" },
            borderRadius: "10px",
          }}
          placeholder="جستجوی برای آیکون،تصویر،فایل لایه باز"
          type="text"
          variant="outlined"
          size="small"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          InputProps={{
            startAdornment: (
              <>
                <Link href="#">
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                </Link>
              </>
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
              </>
            ),
          }}
        />
      </Box>
    </Container>
  );
}
