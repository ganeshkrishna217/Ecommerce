import {
  Divider,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, UseAppSelector } from "../../app/store/ConfigureStore";
import {
  addBasketItemAysnc,
  removeBasketItemAsync,
} from "../Basket/BasketSlice";
import { fetchProductAsync, productSelectors } from "./CatalogSlice";

function ProductDetails() {
  const { basket, status } = UseAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const product = UseAppSelector((state) =>
    productSelectors.selectById(state, parseInt(id!))
  );
  const { status: productStatus } = UseAppSelector((state) => state.catalog);
  const [quantity, setQuantity] = useState(0);

  const item = basket?.items.find((i) => i.productId === product?.id);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
    if (!product && id) dispatch(fetchProductAsync(parseInt(id)));
  }, [dispatch, id, item, product]);

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    if (parseInt(event.currentTarget.value) >= 0) {
      setQuantity(parseInt(event.currentTarget.value));
    }
  }

  function handleUpdateQuantity() {
    if (!product) return;
    if (!item || item.quantity < quantity) {
      const extraQuantity = item ? quantity - item.quantity : quantity;
      dispatch(
        addBasketItemAysnc({ productId: product.id, quantity: extraQuantity })
      );
    } else if (item && item.quantity > quantity) {
      const additionalQuantity = item.quantity - quantity;
      dispatch(
        removeBasketItemAsync({
          productId: item.productId,
          quantity: additionalQuantity,
        })
      );
    }
  }

  if (productStatus === "pendingFetchProduct")
    return <LoadingComponent message="Loading Product" />;
  if (!product) return <NotFound />;
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        ></img>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }}></Divider>
        <Typography variant="h4" color="secondary">
          INR {(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{product.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>{product.brand}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>{product.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quantity in Stock</TableCell>
              <TableCell>{product.quantityInStock}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              onChange={handleChangeQuantity}
              variant="outlined"
              type="number"
              label="Quantity in cart"
              fullWidth
              value={quantity}
            />
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              onClick={handleUpdateQuantity}
              disabled={
                item?.quantity === quantity || (!item && quantity === 0)
              }
              loading={status.includes("pending")}
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              sx={{ height: "55px" }}
            >
              {item ? "Update Quantity" : "Add to cart"}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ProductDetails;
