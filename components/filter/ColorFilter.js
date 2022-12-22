import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";

const ColorFilter = ({ colors }) => {
  const router = useRouter();
  const check = async (id) => {
    router.query.color = id;
    await router.push(router);
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
                display: "none",
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ColorFilter;
