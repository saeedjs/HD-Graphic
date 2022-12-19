import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const ItemUploadedFileCard = (props) => {
  const [del, setDel] = useState(false);

  const handleDelete = () => {
    if (window.confirm("آیا مطمئنی میخوای پاک کنی؟")) {
      setDel(true);
    }
  };
  const handleEdit = () => {
    console.log(`this is product is status EDIT! product:${props.title}`);
  };

  return (
    <Grid
      sx={
        !del
          ? {
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
              border: "1px solid #E9E9E9",
              pt: 1,
              pr: 1,
              pl: 1,
              pb: 1,
              m: 1,
              position: "relative",
            }
          : {
              display: "none",
            }
      }
      item
      xs={10}
      sm={4}
      md={4}
      lg={2}
      xl={2}
    >
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
        }}
        onClick={() => handleDelete()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 18 18"
        >
          <g
            id="Group_21"
            data-name="Group 21"
            transform="translate(-449 -1026)"
          >
            <circle
              id="Ellipse_25"
              data-name="Ellipse 25"
              cx="9"
              cy="9"
              r="9"
              transform="translate(449 1026)"
              fill="#f6416c"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M5.262,4.472,8.779.955A.559.559,0,0,0,7.988.164h0L4.472,3.681.955.164A.559.559,0,0,0,.164.955L3.681,4.472.164,7.988a.559.559,0,0,0,.791.791L4.472,5.262,7.988,8.779a.559.559,0,0,0,.791-.791Z"
              transform="translate(453.528 1030.528)"
              fill="#fff"
            />
          </g>
        </svg>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img src={props.srcImage} alt="" />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            {props.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            sx={{ mr: 1, fontSize: "13px", fontWeight: "bold" }}
            onClick={() => handleEdit()}
          >
            <svg
              id="_3917361"
              data-name="3917361"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                id="Path_7"
                data-name="Path 7"
                d="M15.242.709,6.1,9.853A3.725,3.725,0,0,0,5,12.5v1.007a.75.75,0,0,0,.75.75H6.757a3.724,3.724,0,0,0,2.651-1.1l9.144-9.144a2.344,2.344,0,0,0,0-3.31,2.4,2.4,0,0,0-3.31,0Zm2.25,2.25L8.348,12.1a2.265,2.265,0,0,1-1.591.658H6.5V12.5a2.265,2.265,0,0,1,.658-1.591L16.3,1.769a.861.861,0,0,1,1.19,0,.842.842,0,0,1,0,1.189Z"
                transform="translate(-1.25 -0.011)"
                fill="#4ecca3"
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M17.25,6.734a.75.75,0,0,0-.75.75V11.25h-3a2.25,2.25,0,0,0-2.25,2.25v3H3.75A2.25,2.25,0,0,1,1.5,14.25V3.75A2.25,2.25,0,0,1,3.75,1.5h6.781a.75.75,0,1,0,0-1.5H3.75A3.754,3.754,0,0,0,0,3.75v10.5A3.754,3.754,0,0,0,3.75,18h8.507a3.726,3.726,0,0,0,2.652-1.1L16.9,14.908A3.726,3.726,0,0,0,18,12.257V7.484A.75.75,0,0,0,17.25,6.734Zm-3.4,9.107a2.231,2.231,0,0,1-1.1.6V13.5a.75.75,0,0,1,.75-.75h2.944a2.262,2.262,0,0,1-.6,1.1Z"
                fill="#4ecca3"
              />
            </svg>
            <span
              style={{
                marginBottom: "1px",
                marginRight: "3px",
                color: "black",
              }}
            >
              {" "}
              ویرایش
            </span>
          </Button>
          <Typography
            sx={{
              ml: 1,
              marginTop: "9px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            فروش:{props.sol}بار
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default ItemUploadedFileCard;
