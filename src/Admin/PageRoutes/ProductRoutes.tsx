import { NotFound } from "@/NotFound";
import { Route, Routes } from "react-router-dom";
import { New } from "../Actions/New";
import { Download } from "../Actions/Download";
import { Edit } from "../Actions/Edit";
import { Delete } from "../Actions/Delete";
import { Update } from "../Actions/Update";
import { Products } from "../Products";

export function ProductRoutes() {
  return (
    <Routes>
      <Route>
        <Route index element={<Products />} />
        <Route path="new" element={<New />} />
        <Route path="download/:id" element={<Download />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="delete/:id" element={<Delete />} />
        <Route path="productStatus/:id/:status" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
