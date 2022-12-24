import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useRouter } from "next/router";
const licenseFilter = () => {
  const router = useRouter();
  const checkButtonArray = [
    {
      id: 0,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
      val: "رایگان",
      filter: "free",
    },
    {
      id: 1,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
      val: "پولی",
      filter: "crown",
    },
    {
      id: 2,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
      val: "اشتراکی",
      filter: "subscribe",
    },
    {
      id: 3,
      backColor: "white",
      color: "black",
      variant: "outlined",
      status: false,
      val: "فقط اشتراکی",
      filter: "unsubscribe",
    },
  ];
  const [checkButtonState, setCheckButton] = useState(checkButtonArray);
  const checkButton = async (id, filter) => {
    const copyCheckButtonState = [...checkButtonState];
    const findDisplay = copyCheckButtonState.find((a) => a.id == id);
    if (findDisplay.status) {
      findDisplay.backColor = "white";
      findDisplay.color = "black";
      findDisplay.variant = "outlined";
      findDisplay.status = false;
      router.query.filter = "";
      await router.push(router);
    } else {
      checkButtonState.map(
        (item) => (
          (item.backColor = "white"),
          (item.color = "black"),
          (item.variant = "outlined"),
          (item.status = false)
        )
      );
      findDisplay.backColor = "colors.green";
      findDisplay.color = "white";
      findDisplay.variant = "contained";
      findDisplay.status = true;
      router.query.filter = filter;
      await router.push(router);
    }
    setCheckButton(copyCheckButtonState);
  };
  return (
    <>
      <Box>
        {checkButtonState.map((item, id) => (
          <Button
            onClick={() => checkButton(id, item.filter)}
            variant={checkButtonState[id].variant}
            sx={{
              backgroundColor: checkButtonState[id].backColor,
              minWidth: "68px",
              height: "31px",
              mx: "5px",
              mt: 0.8,
              borderRadius: "5px",
              borderColor: "#E1E1E1",
              boxShadow: "0px 0px",
              "&:hover": {
                borderColor: "#E1E1E1",
                backgroundColor: checkButtonState[id].backColor,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: checkButtonState[id].color,
              }}
            >
              {item.val}
            </Typography>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default licenseFilter;
