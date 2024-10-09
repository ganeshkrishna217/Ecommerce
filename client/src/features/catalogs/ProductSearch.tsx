import { debounce, TextField } from "@mui/material";
import { useAppDispatch, UseAppSelector } from "../../app/store/ConfigureStore";
import { setProductParams } from "./CatalogSlice";
import { useState } from "react";

export function ProductSearch() {
  const { productParams } = UseAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
  const debouncedSearch = debounce((event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  }, 1300);

  return (
    <TextField
      variant="outlined"
      fullWidth
      label="Search Products"
      value={searchTerm || ""}
      onChange={(event: any) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event);
      }}
    />
  );
}
