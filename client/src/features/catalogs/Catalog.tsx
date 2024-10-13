import { useEffect } from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import {
  fetchProductsAsync,
  fetchProductsFiltersAsync,
  productSelectors,
  setPageNumber,
  setProductParams,
} from "./CatalogSlice";
import { useAppDispatch, UseAppSelector } from "../../app/store/ConfigureStore";
import { Grid, Paper } from "@mui/material";
import { ProductSearch } from "./ProductSearch";
import { RadioButtonGroup } from "../../app/components/RadioButtonGroup";
import CheckButtonGroup from "../../app/components/CheckButtonGroup";
import AppPagination from "../../app/components/AppPagination";

function Catalog() {
  const Products = UseAppSelector(productSelectors.selectAll);
  const {
    productsLoaded,
    filtersLoaded,
    brands,
    types,
    productParams,
    metaData,
  } = UseAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const sortOptions = [
    { value: "name", label: "Alphabetical-Order" },
    { value: "priceDesc", label: "Price high-to-low" },
    { value: "priceAsc", label: "Price low-to-high" },
  ];

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchProductsFiltersAsync());
  }, [filtersLoaded, dispatch]);

  if (!filtersLoaded) return <LoadingComponent message="Loading Products" />;

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
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <Paper sx={{ mb: 1, p: 2 }}>
          <RadioButtonGroup
            options={sortOptions}
            selectedValue={productParams.orderBy}
            onChange={(e) =>
              dispatch(setProductParams({ orderBy: e.target.value }))
            }
          />
        </Paper>
        <Paper sx={{ mb: 1, p: 2 }}>
          <CheckButtonGroup
            items={brands}
            checked={productParams.brands}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ brands: items }))
            }
          />
        </Paper>
        <Paper sx={{ mb: 1, p: 2 }}>
          <CheckButtonGroup
            items={types}
            checked={productParams.types}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ types: items }))
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList Products={Products}></ProductList>
      </Grid>
      {/* <Button variant="contained" onClick={AddProduct}>
        ADD Product
      </Button> */}
      <Grid item xs={3}></Grid>
      <Grid item xs={9} sx={{ mb: 2 }}>
        {metaData && (
          <AppPagination
            metaData={metaData}
            onPageChange={(page) =>
              dispatch(setPageNumber({ pageNumber: page }))
            }
          />
        )}
      </Grid>
    </Grid>
  );
}
export default Catalog;
