import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
export const Mypagination = () => {
  const router = useRouter();
  const pageClick = async (val) => {
    router.query.page = val;
    await router.push(router);
  };

  const paginationVals = [
    { id: 0, val: "1", status: false },
    { id: 1, val: "2", status: false },
    { id: 2, val: "3", status: false },
    { id: 3, val: "بعدی", status: false },
  ];
  return (
    <>
      <Box>
        <Container sx={{ m: 0 }}>
          <List sx={{ display: "flex", width: "10%" }}>
            {paginationVals.map((item, i) => (
              <>
                <ListItem
                  onClick={() => pageClick(item.val)}
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
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.val}
                    </Typography>
                  </Box>
                </ListItem>
              </>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
};
