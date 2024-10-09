import { Product } from "../../app/models/Product";
import Grid from "@mui/material/Grid2";
import Card from "./Cards";
import { UseAppSelector } from "../../app/store/ConfigureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  Products: Product[];
}

function ProductList(props: Props) {
  const { productsLoaded } = UseAppSelector((state) => state.catalog);
  return (
    <Grid container spacing={3}>
      {props.Products.map((item) => {
        return (
          <Grid size={4} key={item.id}>
            {productsLoaded ? <Card Product={item} /> : <ProductCardSkeleton />}
          </Grid>
        );
      })}
    </Grid>
  );
}
export default ProductList;
