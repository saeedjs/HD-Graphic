import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useRouter } from "next/router";

const SearchFilter = () => {
  const router = useRouter();
  const [q, setQ] = useState();
  const search = async (val) => {
    router.query.q = val;
    await router.push(router);
  }
  return (
    <>
      <Box
        height="130px"
        pr="25px"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box mb="10px" sx={{ display: "flex" }}>
          <Box sx={{ ml: "10px" }}>
            <img src="/images/icon/search.png" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              جستجو
            </Typography>
          </Box>
        </Box>
        <Box>
          <input
            onChange={(e) => search(e.target.value)}
            type="text"
            style={{
              width: "186px ",
              height: "42px",
              backgroundColor: "#EEEEEE",
              borderRadius: "5px",
              border: "none",
              textAlign: "center",
              "&:hover": {
                border: "none",
              },
            }}
            placeholder="جستجو در میان طرح های کاربر"
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchFilter;
