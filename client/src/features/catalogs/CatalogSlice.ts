import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Product, ProductParams } from "../../app/models/Product";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/ConfigureStore";
import { MetaData } from "../../app/models/Pagination";

interface CatalogParams {
  productsLoaded: boolean;
  filtersLoaded: boolean;
  status: string;
  brands: [];
  types: [];
  productParams: ProductParams;
  metaData: MetaData | null;
}

const productAdapter = createEntityAdapter<Product>();

function getAxiosParams(productParams: ProductParams) {
  const params = new URLSearchParams();
  params.append("pageNumber", productParams.pageNumber.toString());
  params.append("pageSize", productParams.PageSize.toString());
  params.append("orderBy", productParams.orderBy);
  if (productParams.brands.length > 0)
    params.append("brands", productParams.brands.toString());
  if (productParams.types.length > 0)
    params.append("types", productParams.types.toString());
  if (productParams.searchTerm)
    params.append("searchTerm", productParams.searchTerm);
  return params;
}

export const fetchProductsAsync = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("catalog/fetchProductsAsync", async (_, thunkAPI) => {
  const params = getAxiosParams(thunkAPI.getState().catalog.productParams);
  try {
    const response = await agent.Catalog.list(params);
    thunkAPI.dispatch(setMetaData(response.metaData));
    return response.items;
  } catch (err: any) {
    return thunkAPI.rejectWithValue({ error: err.data });
  }
});

export const fetchProductAsync = createAsyncThunk<Product, number>(
  "catalog/fetchProductAsync",
  async (productId, thunkAPI) => {
    try {
      return await agent.Catalog.details(productId);
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ error: err.data });
    }
  }
);

export const fetchProductsFiltersAsync = createAsyncThunk(
  "catalog/fetchProductsFilters",
  async (_, thunkAPI) => {
    try {
      return await agent.Catalog.filters();
    } catch (err: any) {
      return thunkAPI.rejectWithValue({ error: err.data });
    }
  }
);
function initParams() {
  return {
    orderBy: "name",
    pageNumber: 1,
    PageSize: 6,
    brands: [],
    types: [],
  };
}
export const CatalogSlice = createSlice({
  name: "catalog",
  initialState: productAdapter.getInitialState<CatalogParams>({
    productsLoaded: false,
    filtersLoaded: false,
    status: "idle",
    brands: [],
    types: [],
    productParams: initParams(),
    metaData: null,
  }),
  reducers: {
    setProductParams: (state, action) => {
      state.productsLoaded = false;
      state.productParams = {
        ...state.productParams,
        ...action.payload,
        pageNumber: 1,
      };
    },
    setPageNumber: (state, action) => {
      state.productsLoaded = false;
      state.productParams = {
        ...state.productParams,
        ...action.payload,
      };
    },
    setMetaData: (state, action) => {
      state.metaData = action.payload;
    },
    resetProductParams: (state) => {
      state.productParams = initParams();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = "pendingFetchProducts";
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      productAdapter.setAll(state, action.payload);
      state.productsLoaded = true;
      state.status = "idle";
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.status = "idle";
    });
    builder.addCase(fetchProductAsync.pending, (state) => {
      state.status = "pendingFetchProduct";
    });
    builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productAdapter.upsertOne(state, action.payload);
      state.status = "idle";
    });
    builder.addCase(fetchProductAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.status = "idle";
    });
    builder.addCase(fetchProductsFiltersAsync.pending, (state) => {
      state.status = "pendingFetchFilters";
    });
    builder.addCase(fetchProductsFiltersAsync.fulfilled, (state, action) => {
      state.brands = action.payload.brands;
      state.types = action.payload.types;
      state.filtersLoaded = true;
      state.status = "idle";
    });
    builder.addCase(fetchProductsFiltersAsync.rejected, (state, action) => {
      state.status = "idle";
      console.log(action.payload);
    });
  },
});

export const productSelectors = productAdapter.getSelectors(
  (state: RootState) => state.catalog
);
export const {
  setProductParams,
  resetProductParams,
  setMetaData,
  setPageNumber,
} = CatalogSlice.actions;
