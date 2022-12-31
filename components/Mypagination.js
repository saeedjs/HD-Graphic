import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";
let isClick = 1;
export const Mypagination = ({ mount }) => {
  const mountPage = mount && mount.page_count ? mount.page_count : 0;
  const paginationVals = [];
  const [page, setPage] = useState(paginationVals);
  const router = useRouter();
  const backPage = async () => {
    if (isClick > 1) {
      let copyPaginationVals = page;
      copyPaginationVals.map((item) => (item.id -= 1));
      setPage(copyPaginationVals);
      router.query.page = isClick - 1;
      await router.push(router);
      isClick--;
    }
  };
  const pageClick = async (val, index) => {
    let copyPaginationVals = page;
    let valFind = copyPaginationVals.find((a) => a == val);
    let valFilter = copyPaginationVals.filter((a) => a.id != index);
    valFilter.map((item) => (item.status = false));
    valFind.status = true;
    setPage(copyPaginationVals);
    router.query.page = index;
    await router.push(router);
    isClick = index;
  };
  const nextPage = async () => {
    if (isClick <= mountPage) {
      isClick++;
      let copyPaginationVals = page;
      copyPaginationVals.map((item) => (item.id += 1, item.status = false));
      let nextFind = copyPaginationVals.find((a) => a.id == isClick);
      nextFind.status = true;
      setPage(copyPaginationVals);
      router.query.page = isClick;
      await router.push(router);
    }
  };
  for (let i = 1; i <= mountPage; i++) {
    let val = {};
    val.status = false;
    val.id = i;
    paginationVals.push(val);
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
                  width: "45px",
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
            {page.map((item, i) => (
              <>
                {i < 3 ? (
                  <ListItem
                    onClick={() => pageClick(item, item.id)}
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
                        color: item.status ? "white" : "black",
                        backgroundColor: item.status ? "#4ECCA3" : "white",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {item.id}
                        {/* {console.log(item.status)} */}
                      </Typography>
                    </Box>
                  </ListItem>
                ) : (
                  <></>
                )}
              </>
            ))}
            <ListItem
              onClick={() => nextPage()}
              sx={{ p: "0px", ml: "3px", mr: "3px" }}
            >
              <Box
                sx={{
                  width: "45px",
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
