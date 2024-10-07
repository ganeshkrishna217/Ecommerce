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
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/context/StoreContext";
interface Props {
  Product: Product;
}

function Cards(props: Props) {
  const [Loading, setLoading] = useState(false);
  const { setBasket } = useStoreContext();

  function AddCartButton(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }
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
        <LoadingButton
          loading={Loading}
          onClick={() => AddCartButton(props.Product.id)}
          size="small"
          variant="contained"
        >
          Add to Cart
        </LoadingButton>
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
