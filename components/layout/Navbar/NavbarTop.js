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
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const pages = [
  { name: "آیکون", href: "/icons" },
  { name: "تصویر", href: "/picture" },
  { name: "فایل لایه باز", href: "/openfile" },
  { name: "دسته بندی", href: "/category" },
  { name: "مجموعه ها", href: "/collection" },
  { name: "بلاگ", href: "/blog" },
];
const settings = ["پروفایل", "اکانت", "داشبورد", "خروج"];

function NavbarTop() {
  const baseUrl = process.env.BASE_URL;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [widthSet, setWidthSet] = useState([{ col: 3, width: "750px" }]);
  const [subMenu, setSubMenu] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState([]);
  const [dataSub, setDataSub] = useState([]);
  const [textSub1, setTextSub1] = useState({ index: 0, value: "" });

  const [dataSub1, setDataSub1] = useState([]);
  const [textSub2, setTextSub2] = useState({ index: 0, value: "" });
  const [dataSub2, setDataSub2] = useState([]);

  const [dataSub3, setDataSub3] = useState([]);
  const [textSub3, setTextSub3] = useState({ index: 0, value: "" });

  const [dataSub4, setDataSub4] = useState([]);

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

  const findSubMenu = () => {
    let find = [];
    dataSub2.map((item) => {
      if (item.title === textSub2.value) {
        find.push(item.child);
      }
    });
    return (find.length > 0 && find[0]) || find;
  };

  const findSubMenu2 = () => {
    let find = [];
    dataSub2.map((item) => {
      if (item.title === textSub2.value) {
        item.child.map((e) => {
          if (e.title === textSub3.value) {
            find.push(e.child);
          }
        });
      }
    });
    return (find.length > 0 && find[0]) || find;
  };

  useEffect(() => {
    const data = async () => {
      const categoryList = await axios.get("https://hdgraphic.ir/api/v1/files/categories?father=1");
      setCategories(categoryList);
    };
    data();
    console.log(process.env);
  }, []);

  useEffect(() => {
    if (categories.data) {
      let sub = [];
      categories.data.map((e) => {
        sub.push(e.child);
      });
      setDataSub(sub);
    }
  }, [categories]);

  useEffect(() => {
    if (dataSub) {
      let sub = [];
      dataSub.map((e) => {
        sub.push(e);
      });
      setDataSub1(sub);
    }
  }, [dataSub]);

  useEffect(() => {
    if (dataSub1) {
      let sub = [];
      dataSub1.map((event, i) => {
        dataSub1[i].map((e) => {
          if (e.child.length <= 0) return;
          sub.push({ title: e.title, child: e.child });
        });
      });
      setDataSub2(sub);
    }
  }, [dataSub1]);

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
                  <Link href={`${page.href}`} textAlign="center">
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
                    <Link href={`${baseUrl}${page.href}`}>{page.name}</Link>
                  </Button>
                )}
                {false && page.name == "دسته بندی" && (
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
                    <Grid
                      container
                      sx={{
                        position: "absolute",
                        top: "80%",
                        border: "1px solid #ccc",
                        backgroundColor: "white",
                        width: `${widthSet[0].width}`,
                        height: "180px",
                        overflowY: "scroll",
                        // maxWidth: " !important",
                      }}
                    >
                      <Grid item lg={widthSet[0].col}>
                        {categories.data &&
                          categories.data.map((e, i) => {
                            return (
                              <Box
                                sx={{
                                  display: `${!showMenu && "none"}`,
                                  "&:hover": {
                                    backgroundColor: "#eeeeee",
                                  },
                                  transition: "0.3s",
                                  padding: "5px 5px 5px 50px",
                                }}
                                component="div"
                                onMouseOver={(event) => {
                                  setSubMenu(event.target.innerText);
                                  setShowSubMenu(true);
                                }}
                                onMouseOut={() => setShowSubMenu(false)}
                              >
                                <Link
                                  href={`/files/${e.slug}`}
                                  defaultValue={e.title}
                                  onMouseOver={(e) =>
                                    setTextSub1({ index: i, value: e.target.innerText })
                                  }
                                >
                                  {e.title}
                                </Link>
                              </Box>
                            );
                          })}
                      </Grid>
                      <Grid item lg={widthSet[0].col}>
                        <Box>
                          {dataSub1 &&
                            textSub1.value !== "" &&
                            dataSub1[textSub1.index].map((e, i) => {
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
                                  <Box>
                                    <Link
                                      href={`files/${e.slug}`}
                                      style={{ whiteSpace: "nowrap" }}
                                      onMouseOver={(e) =>
                                        setTextSub2({ index: i, value: e.target.innerText })
                                      }
                                    >
                                      {e.title}
                                    </Link>
                                  </Box>
                                </Box>
                              );
                            })}
                        </Box>
                      </Grid>
                      <Grid item lg={widthSet[0].col}>
                        <Box>
                          {dataSub2 &&
                            textSub2.value !== "" &&
                            findSubMenu().map((e, i) => {
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
                                  <Box>
                                    <Link
                                      href={`files/${e.slug}`}
                                      style={{ whiteSpace: "nowrap" }}
                                      onMouseOver={(e) =>
                                        setTextSub3({ index: i, value: e.target.innerText })
                                      }
                                    >
                                      {e.title}
                                    </Link>
                                  </Box>
                                </Box>
                              );
                            })}
                        </Box>
                      </Grid>
                      <Grid item lg={widthSet[0].col}>
                        <Box>
                          {dataSub2 &&
                            textSub2.value !== "" &&
                            findSubMenu2().map((e) => {
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
                                  <Box>
                                    <Link
                                      href={`files/${e.slug}`}
                                      style={{ whiteSpace: "nowrap" }}
                                      // onMouseOver={(e) =>
                                      //   setTextSub2({ index: i, value: e.target.innerText })
                                      // }
                                    >
                                      {e.title}
                                    </Link>
                                  </Box>
                                </Box>
                              );
                            })}
                        </Box>
                      </Grid>
                    </Grid>
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
