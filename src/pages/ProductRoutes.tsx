import { NotFound } from "@/NotFound";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import { Products } from "./Products";

export function ProductRoutes() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<Products />} />
          <Route path="purchase/:id" element={<Checkout />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
