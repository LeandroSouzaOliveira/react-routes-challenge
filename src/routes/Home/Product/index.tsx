import { Outlet } from "react-router-dom";
import ProductLink from "../../../components/ProductLink";

export default function Product() {
  return (
    <>
      <ProductLink />
      <Outlet />
    </>
  );
}
