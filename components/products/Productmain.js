import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container,Paper,CardActionArea, Grid } from "@mui/material";

const ProductMain = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Typography color="">متن نمایشی برای </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>متن نمایشی برای </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={4}>
          <Paper>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item lg={2.5}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={2.5}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={2.5}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nFe39zYThqDWTPcThwDm0H9axjBpeI3DuQ&usqp=CAU"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductMain;
