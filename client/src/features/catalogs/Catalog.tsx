import { useEffect } from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { fetchProductsAsync, productSelectors } from "./CatalogSlice";
import { useAppDispatch, UseAppSelector } from "../../app/store/ConfigureStore";

function Catalog() {
  const Products = UseAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = UseAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded]);

  if (status === "pendingFetchProducts")
    return <LoadingComponent message="Loading Products" />;

  // function AddProduct() {
  //   setProducts((prevState) => {
  //     return [
  //       ...prevState,
  //       {
  //         id: prevState.length + 2024101,
  //         name: "product" + (Products.length + 1),
  //         price: 100 * Products.length + 100,
  //         pictureUrl: "http://picsum/random/101",
  //         brand: "unkown brand",
  //       },
  //     ];
  //   });
  // }
  return (
    <>
      <ProductList Products={Products}></ProductList>
      {/* <Button variant="contained" onClick={AddProduct}>
        ADD Product
      </Button> */}
    </>
  );
}
export default Catalog;
