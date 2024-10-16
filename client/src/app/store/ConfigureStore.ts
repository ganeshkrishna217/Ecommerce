import { configureStore } from "@reduxjs/toolkit";
import { BasketSlice } from "../../features/Basket/BasketSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CatalogSlice } from "../../features/catalogs/CatalogSlice";
import { accountSlice } from "../../features/account/AccountSlice";

export const Store = configureStore({
  reducer: {
    basket: BasketSlice.reducer,
    catalog: CatalogSlice.reducer,
    account: accountSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
