import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useState } from "react";

const DashboardSideBar = () => {
  const [dashSideVals, setDashSideVals] = useState([
    { id: 0, text: "داشبورد", clickable: true, href: "/dashboard/" },
    {
      id: 1,
      text: "سوابق کاربری",
      clickable: false,
      href: "/dashboard/resume",
    },
    { id: 2, text: "کلکسیون", clickable: false, href: "/dashboard/collection" },
    { id: 3, text: "مدیریت فایل ها", clickable: false, href: "/dashboard/filemanagement" },
    { id: 4, text: "پشتیبانی", clickable: false, href: "/dashboard/support" },
    { id: 5, text: "خروج", clickable: false, href: "#" },
  ]);
  const itemHandle = (index) => {
    const copyDashSideVals = [...dashSideVals];
    const item = copyDashSideVals.find((a) => a.id == index);
    if (!item.clickable) {
      copyDashSideVals.map((i) => {
        i.clickable = false;
      });
      item.clickable = true;
    }
    setDashSideVals(copyDashSideVals);
  };
  return (
    <>
      <Box>
        {dashSideVals.map((item, index) => (
          <Link href={item.href}>
            <Box
              onClick={() => itemHandle(index)}
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
