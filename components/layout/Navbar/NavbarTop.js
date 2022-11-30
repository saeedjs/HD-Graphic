import AppBar from "@mui/material/AppBar";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import Link from "next/link";

const pages = ["آیکون", "تصویر", "فایل لایه باز", "دسته بندی", "مجموعه ها", "طراحان"];
const settings = ["پروفایل", "اکانت", "داشبورد", "خروج"];

function NavbarTop() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "0 2px 2px -2px rgba(0,0,0,0.4)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Link href="#">
                <img src="images/3917033.png" />
              </Link>
            </Paper>
            <IconButton
              sx={{ color: "black" }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ width: "200px" }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Link href="#">
                <img src="images/3917033.png" />
              </Link>
            </Paper>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                mx: 2,
                backgroundColor: "colors.green",
                "&:hover": {
                  backgroundColor: "colors.greenHover",
                },
              }}
            >
              اشتراک ویژه
            </Button>

            {false && (
              <>
                <Button variant="text" sx={{ color: "colors.black", m: 0 }}>
                  ورود
                </Button>
                <Button variant="text" sx={{ color: "colors.black", m: 0 }}>
                  ثبت نام
                </Button>
              </>
            )}
            {true && (
              <Tooltip title="Open settings" sx={{ display: "none" }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ px: 2 }}>
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ width: "120px" }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <Link href="#">
              <img src="images/Group13.png" />
            </Link>
          </Paper>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarTop;
