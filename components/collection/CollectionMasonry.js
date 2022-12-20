import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
export default function CollectionMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Box key={index} sx={{ height: "100px" }}>
            {index + 1}
          </Box>
        ))}
      </Masonry>
    </Box>
  );
}
