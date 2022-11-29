import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const ProductMain = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <CardMedia
                component="img"
                height="240"
                image="https://picsum.photos/200"
                alt="green iguana"
              />
            </Grid>
            <CardMedia
              component="img"
              height="240"
              image="https://picsum.photos/200"
              alt="green iguana"
            />
            <CardMedia
              component="img"
              height="240"
              image="https://picsum.photos/200"
              alt="green iguana"
            />
            <CardMedia
              component="img"
              height="240"
              image="https://picsum.photos/200"
              alt="green iguana"
            />
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductMain;
