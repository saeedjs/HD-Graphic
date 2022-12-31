import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardSideBar = () => {
  const [dashSideVals, setDashSideVals] = useState([
    { id: 0, text: "داشبورد", clickable: false, href: "/dashboard" },
    {
      id: 1,
      text: "سوابق کاربری",
      clickable: false,
      href: "/dashboard/resume",
    },
    { id: 2, text: "کلکسیون", clickable: false, href: "/dashboard/collection" },
    {
      id: 3,
      text: "مدیریت فایل ها",
      clickable: false,
      href: "/dashboard/filemanagement",
    },
    { id: 4, text: "پشتیبانی", clickable: false, href: "/dashboard/support" },
    { id: 5, text: "خروج", clickable: false, href: "#" },
  ]);
  const router = useRouter();
  const [route, setRout] = useState(router.route);
  useEffect(() => {
    const dashSideValsCopy = [...dashSideVals];
    let thisRoutFind = dashSideValsCopy.find((href) => href.href == route);
    if (thisRoutFind)
      thisRoutFind.clickable = true;
    setDashSideVals(dashSideValsCopy);
    console.log(dashSideVals)
  },[route]);
  const itemHandle = (index, href) => {
    if (href == "#") {
      Swal.fire({
        title: "مطمعنی میخوای بری؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "خیر",
        confirmButtonText: "بله",
      }).then((result) => {
        if (result.isConfirmed) {
          Cookies.remove("access"),
            router.push("/"),
            toast.success("با موفقیت خارج شدید");
        }
      });
    }
  };
  return (
    <>
      <Box>
        {dashSideVals.map((item, index) => (
          <Link href={item.href}>
            <Box
              onClick={() => itemHandle(index, item.href)}
              sx={{
                cursor: "pointer",
                borderTop: "1px solid #E9E9E9",
                borderBottom: "1px solid #E9E9E9",
                height: "55px",
                pr: "25px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  color: item.clickable ? "#F6416C" : "#393E46",
                  alignItems: "center",
                  height: "100%",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
};
export default DashboardSideBar;
