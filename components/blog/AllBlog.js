import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Mypagination } from "../Mypagination";
import BlogNavBar from "./BlogNavBar";
import SingleBlog from "./SingleBlog";

const AllBlog = ({ blogs }) => {
  return (
    <>
      <Box>
        <Container>
          <Grid container sx={{ justifyContent: "center", mb: "30px" }}>
            {blogs.map((blog) => (
              <Grid item lg={4} md={5} sm={7} xs={10}>
                <SingleBlog blog={blog} />
              </Grid>
            ))}
          </Grid>
          <Mypagination mount={{ page_count: 3 }} />
        </Container>
      </Box>
    </>
  );
};

export default AllBlog;
