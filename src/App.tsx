import {   Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./NotFound";
import { AdminRoutes } from "./Frame/AdminRoutes";

function App() {

  
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
