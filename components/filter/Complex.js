import { Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

const Complex = () => {
  const router = useRouter();
  const [priceFilter, setPriceFilter] = useState([
    {
      id: 0,
      status: false,
      value: "جدید ترین",
      query: "-id"
    },
    {
      id: 1,
      status: false,
      value: "محبوب ترین",
      query: "-like"
    },
  ]);
  const handleChange = async (id, complex) => {
    const copyPriceFilter = [...priceFilter];
    const findDisplay = copyPriceFilter.find((a) => a.id == id);
    if (findDisplay.status) findDisplay.status = false;
    else findDisplay.status = true;
    setPriceFilter(copyPriceFilter);
    router.query.complex_filter = complex;
    await router.push(router);
  };
  return (
    <>
      <Box pr="10px" sx={{ borderBottom: "1px solid #EEEEEE" }}>
        <Box
          mt={"10px"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {priceFilter.map((item, i) => (
            <>
              {item.status ? (
                <Box
                  sx={{
                    minWidth: "92px",
                    my: "10px",
                    height: "31px",
                    borderRadius: "10px",
                    border: "1px solid #4ECCA3",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Box m={1}>
                    <Typography fontSize={"15px"} fontWeight={0}>
                      {item.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      m: "5px",
                    }}
                  >
                    <CloseIcon
                      onClick={() => handleChange(i)}
                      sx={{
                        color: "red",
                        fontSize: "16px",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {priceFilter.map((item, i) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={item.status}
                type={"checkbox"}
                onChange={() => handleChange(i, item.query)}
                sx={{ color: "#C2C2C2" }}
              />
              <Typography>{item.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Complex;
