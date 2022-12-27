import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";
import { useState } from "react";

const ColorFilter = ({ colors }) => {
  let display = [];
  colors.map((item) => (display[item.id - 1] = "none"));
  const [displayState, setDisplayState] = useState([...display]);
  const router = useRouter();
  const check = async (id) => {
    let copyDisplayState = [...displayState];
    if (copyDisplayState[id - 1] == "none") {
      router.query.color = id;
      await router.push(router);
      copyDisplayState.map((item, i) => (copyDisplayState[i - 1] = "none"));
      copyDisplayState[id - 1] = "block";
    } else {
      router.query.color = '';
      await router.push(router);
      copyDisplayState[id - 1] = "none";
    }
    setDisplayState(copyDisplayState);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <Box
            onClick={() => check(color.id)}
            width="20px"
            height="20px"
            mr="7px"
            mt="7px"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              backgroundColor: color.code,
              border: "1px solid #c2c2c2",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <CheckIcon
              fontSize="small"
              sx={{
                color: "#FFFFFF",
                display: displayState[color.id - 1],
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ColorFilter;
