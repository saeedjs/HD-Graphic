import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";
let isClick = 1;
export const Mypagination = ({ mount }) => {
  const router = useRouter();
  const backPage = async () => {
    console.log(isClick)
    if (isClick > 1) {
      console.log(isClick)
      router.query.page = isClick-1;
      await router.push(router);
      isClick--;
    }
  }
  const pageClick = async (val) => {
    router.query.page = val;
    await router.push(router);
    isClick = val;
  };
  const nextPage = async () => {
    if (isClick <= mount) {
      router.query.page = isClick+1;
      await router.push(router);
      isClick++;
    }
  }
  const paginationVals = [];
  for (let i = 1; i <= mount; i++) {
    paginationVals.push(i);
  }
  return (
    <>
      <Box>
        <Container sx={{ m: 0 }}>
          <List sx={{ display: "flex", width: "10%" }}>
            <ListItem
              onClick={() => backPage()}
              sx={{ p: "0px", ml: "3px", mr: "3px" }}
            >
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "5px",
                  border: "1px solid #DEDEDE",
                  display: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>قبلی</Typography>
              </Box>
            </ListItem>
            {paginationVals.map((item, i) => (
              <>
                <ListItem
                  onClick={() => pageClick(item)}
                  sx={{ p: "0px", ml: "3px", mr: "3px" }}
                >
                  <Box
                    sx={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "5px",
                      border: "1px solid #DEDEDE",
                      display: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>{item}</Typography>
                  </Box>
                </ListItem>
              </>
            ))}
            <ListItem
              onClick={() => nextPage()}
              sx={{ p: "0px", ml: "3px", mr: "3px" }}
            >
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "5px",
                  border: "1px solid #DEDEDE",
                  display: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>بعدی</Typography>
              </Box>
            </ListItem>
          </List>
        </Container>
      </Box>
    </>
  );
};
