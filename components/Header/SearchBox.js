import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Link } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 16, display: "flex", justifyContent: "center", width: "100%" }}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "colors.white",
            p: 0.5,
            alignItems: "center",
            borderRadius: "10px",
            width: {
              xs: "100%",
              sm: "70%",
              md: "55%",
            },
            justifyContent: "space-between",
          }}
        >
          <Box component={"div"} sx={{ display: "flex", width: "200%" }}>
            <Box>
              <Link href="#" sx={{ display: "flex", color: "colors.gray", fontSize: "2rem" }}>
                <SearchIcon />
              </Link>
            </Box>
            <input
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                fontSize: "1rem",
                width: "200%",
              }}
              placeholder="جستجو برای آیکون ، تصویر، فایل لایه باز"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            {value && (
              <>
                <span
                  style={{ position: "relative", zIndex: "1000", backgroundColor: "colors.white" }}
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setValue("")}
                    sx={{
                      fontSize: "1.2rem",
                      position: "absolute",
                      right: "-20px",
                      top: "-3px",
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
        </Box>
      </Box>
    </Container>
  );
}
