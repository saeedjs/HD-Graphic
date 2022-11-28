import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductMain = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductMain;
