import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Product } from "../../app/models/Product";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
interface Props {
  Product: Product;
}

function Cards(props: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {props.Product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={props.Product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain" }}
        image={props.Product.pictureUrl}
        title={props.Product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          INR {(props.Product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.Product.brand} / {props.Product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add to Cart
        </Button>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/catalog/${props.Product.id}`}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
export default Cards;
