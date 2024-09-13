import { NotFound } from "@/NotFound";
import { Cart } from "@/pages/Cart";
import { Home } from "@/pages/Home";
import { MyOrders } from "@/pages/MyOrders";

import { Route, Routes } from "react-router-dom";
import { CustomerLayout } from "./CustomerLayout";
import { ProductRoutes } from "@/pages/ProductRoutes";

export function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path="home/*" element={<Home />} />
          <Route path="products/*" element={<ProductRoutes />} />
          <Route path="orders/*" element={<MyOrders />} />
          <Route path="cart/*" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
