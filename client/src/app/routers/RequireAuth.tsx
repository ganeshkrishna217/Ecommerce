import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UseAppSelector } from "../store/ConfigureStore";

export default function RequireAuth() {
  const { user } = UseAppSelector((state) => state.account);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
