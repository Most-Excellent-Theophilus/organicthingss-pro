import { API, PRODUCTS } from "@/lib/Constants";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function Update() {
  const { id, status } = useParams();
  const navigate = useNavigate();

  
  const changeStatus = async () => {
    try {
      // Send the file and description via Axios

      const formData = new FormData();
      formData.append("available", status === "false" ? "true" : "false");

      const response = await axios.put(API + PRODUCTS + id, {available: status === "false"? "true": "false"});
      console.log(API + PRODUCTS + id)
      console.log("File uploaded successfully:", response.data);

        navigate(-1);
      
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };
  changeStatus();
  return (
    <h1>
      
    </h1>
  );
}
