import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";

const ProductMain = () => {
  return (
    <Container sx={{ maxWidth: "1280px" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography
            sx={{
              borderRight: 8,
              borderColor: "#4ECCA3",
            }}
          >
            <span style={{ marginRight: "10px" }}> تصاویر استوک</span>
            <span
              style={{
                marginRight: "10px",
                color: "#4ECCA3",
                marginRight: "70px",
              }}
            >
              {" "}
              مشاهده همه
            </span>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item sx={{ marginTop: "10px" }} xs={12} md={6} lg={4}>
          <Paper>
            <Card sx={{ maxWidth: 415 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="415"
                  image="/images/654.png"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>

        <Grid item lg={2}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="images/www.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="images/qqq.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={2}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="images/www.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="images/qqq.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={2}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="images/asds.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/images/ewe.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid item lg={2}>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/images/564.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item sx={{ margin: "10px" }} xs={12} md={6} lg={12}>
            <Paper>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/images/dwad.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Image
          src="/images/group.png"
          sx={{ marginTop: "33px" }}
          width={1140}
          height={170}
        />
      </Grid>
    </Container>
  );
};

export default ProductMain;
