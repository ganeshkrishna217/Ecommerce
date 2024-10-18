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
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, UseAppSelector } from "../../app/store/ConfigureStore";
import { addBasketItemAysnc } from "../Basket/BasketSlice";
interface Props {
  Product: Product;
}

function Cards(props: Props) {
  const { status } = UseAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: "#00897b",
            }}
          >
            {props.Product?.name?.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={props.Product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "#00897b" },
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
          loading={status === "pendingAddItem" + props.Product.id}
          onClick={() =>
            dispatch(
              addBasketItemAysnc({ productId: props.Product.id, quantity: 1 })
            )
          }
          size="small"
          variant="contained"
          sx={{ bgcolor: "#00897b", "&:hover": { backgroundColor: "#424242" } }}
        >
          Add to Cart
        </LoadingButton>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/catalog/${props.Product.id}`}
          sx={{ bgcolor: "#00897b", "&:hover": { backgroundColor: "#424242" } }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
export default Cards;
