import { API, PRODUCTS } from "@/lib/Constants";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(API+PRODUCTS+`${id}`);
      console.log("Product updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating the product:", error);
    } finally {
      navigate(-1);
    }
  };
  handleDelete();
  return (
    <>
      <h1>Deleting... </h1>
    </>
  );
}
