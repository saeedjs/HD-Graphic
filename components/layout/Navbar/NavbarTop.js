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
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const pages = [
  { name: "آیکون", href: "/icons" },
  { name: "تصویر", href: "/picture" },
  { name: "فایل لایه باز", href: "/openfile" },
  { name: "دسته بندی", href: "/category" },
  { name: "مجموعه ها", href: "/collection" },
  { name: "طراحان", href: "/designer" },
];
const settings = ["پروفایل", "اکانت", "داشبورد", "خروج"];

function NavbarTop() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    const data = async () => {
      const categoryList = await axios.get("https://hdgraphic.ir/api/v1/files/categories?father=1");
      setCategories(categoryList);
    };
    data();
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 2px -2px rgba(0,0,0,0.4)",
      }}
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
                <img src="/images/3917033.png" />
              </Link>
            </Paper>
            <IconButton
              sx={{ color: "black", fontSize: "2rem" }}
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ width: "200px" }}>
                  <Link href={page.href} textAlign="center">
                    {page.name}
                  </Link>
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
                <img src="/images/3917033.png" />
              </Link>
            </Paper>
            {pages.map((page) => (
              <>
                {page.name !== "دسته بندی" && (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Link href={page.href}>{page.name}</Link>
                  </Button>
                )}
                {page.name == "دسته بندی" && (
                  <Typography
                    href={"#"}
                    component="span"
                    sx={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "14px",
                      margin: "15px",
                      cursor: "pointer",
                      flexDirection: "column",
                    }}
                    onMouseOver={() => setShowMenu(true)}
                    onMouseOut={() => setShowMenu(false)}
                  >
                    {page.name}

                    <Box
                      sx={{
                        position: "absolute",
                        top: "80%",
                        border: "1px solid #ccc",
                        backgroundColor: "white",
                      }}
                    >
                      {categories.data &&
                        showMenu &&
                        categories.data.map((e) => {
                          return (
                            <Box
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#eeeeee",
                                },
                                transition: "0.3s",
                                padding: "5px 5px 5px 50px",
                              }}
                              component="div"
                            >
                              {e.child.length > 0 && console.log(e)}
                              <Link href={`/files/${e.slug}`}>
                                {e.title}
                                {e.child.length > 0 &&
                                  e.child.map((e) => {
                                    return (
                                      <Box
                                        sx={{
                                          margin: "0 70px  0 0",
                                          "&:hover": {
                                            backgroundColor: "#eeeeee",
                                          },
                                          transition: "0.3s",
                                          padding: "5px 5px 5px 50px",
                                        }}
                                        component="div"
                                      >
                                        <Link href={`/files/${e.slug}`}>{e.title}</Link>
                                      </Box>
                                    );
                                  })}
                              </Link>
                            </Box>
                          );
                        })}
                    </Box>
                  </Typography>
                )}
              </>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                mx: 2,
                boxShadow: "none",
                backgroundColor: "colors.green",
                "&:hover": {
                  backgroundColor: "colors.greenHover",
                  boxShadow: "none",
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
              <Tooltip title="پروفایل" sx={{ display: "none" }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ px: 2, fontSize: "1.5rem" }}>
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
              <img src="/images/Group13.png" />
            </Link>
          </Paper>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarTop;
