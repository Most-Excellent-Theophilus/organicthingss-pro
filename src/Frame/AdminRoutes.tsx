import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "./AdminLayout";
import { Home } from "@/Admin/Home";
import { Orders } from "@/Admin/Orders";
import { ProductRoutes } from "@/Admin/PageRoutes/ProductRoutes";
import { Sales } from "@/Admin/Sales";
import { NotFound } from "@/NotFound";

export function AdminRoutes(){
return (
<>
<Routes>
    <Route element={<AdminLayout />}>
        <Route index element={<Home />}/>
        <Route path="home/*" element={<Home />}/>
        <Route path="orders/*" element={<Orders />} />
        <Route path="products/*" element={<ProductRoutes />} />
        <Route path="sales/*" element={<Sales />} />
        <Route path="*" element={<NotFound />} />
    </Route>
</Routes>
</>
);
}