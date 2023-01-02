import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import SingleBlog from "./SingleBlog";

const AllBlog = ({ blogs }) => {
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            {blogs.map((blog) => (
              <Grid item>
                <SingleBlog blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllBlog;
