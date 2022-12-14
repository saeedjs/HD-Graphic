import { Box, Typography } from "@mui/material";
import { propsToClassKey } from "@mui/styles";
import Link from "next/link";

const TitleComponents = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "space-between", xs: "space-around" },
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box
              height={"22px"}
              sx={{
                height: "22px",
                backgroundColor: "colors.green",
                width: "8px",
              }}
            ></Box>
            <Box sx={{ mr: "10px" }}>
              <Typography
                sx={{
                  color: props.tcolor ? props.tcolor : "colors.dark",
                  fontSize: "16px",
                }}
              >
                {props.title}
              </Typography>
            </Box>
            <Box sx={{ mr: "35px" }}>
              <Link href={"#"}>
                <Typography
                  sx={{
                    color: props.allcolor ? props.alltcolor : "colors.green",
                    fontSize: "14px",
                  }}
                >
                  مشاهده همه
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: {
              md: "block",
              xs: "none",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: props.mcolor ? props.mcolor : "colors.green",
              }}
            >
              {props.mount}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default TitleComponents;
