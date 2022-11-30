import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Link } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      "& fieldset": {
        border: "1px solid #ccc",
        transition: "0.3s",
      },
      "&:hover": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
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
      padding: "1px",
    },
  },
}));

export default function SearchBox() {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <TextField
        className={classes.root}
        sx={{
          display: "flex",
          width: {
            xs: "100%",
            md: "50%",
          },
          backgroundColor: "colors.white",
          ".MuiOutlinedInput-root": { padding: "0 2px" },
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
              <div className={classes.root2}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="" sx={{ mt: 2 }}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </>
          ),
        }}
      />
    </Box>
  );
}

// value && (
//   <>
//     <IconButton aria-label="toggle password visibility" onClick={() => setValue("")}>
//       <CancelRoundedIcon />
//     </IconButton>
//   </>
// ),
