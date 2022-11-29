import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";

const Productmain2 = () => {
  return (
    <>
      <Container>
        <Grid container sx={{ maxWidth: "50%" }}>
          <Grid item>
            <Paper>
              <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="310"
                    image="/images/99996.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="310"
                    image="/images/99996.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="310"
                    image="/images/123.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="310"
                    image="/images/1234.png"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Productmain2;
