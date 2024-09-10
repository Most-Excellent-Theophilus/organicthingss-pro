import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { API, IMAGEPATH, PRODUCTS } from "@/lib/Constants";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function Download() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [data , setData] = useState('')
  useEffect( () =>{handleDownload();}, [] )

  const handleDownload = async () => { 
    try {
      const response = await axios.get(API + PRODUCTS + `${id}`);
      setData(response.data)
    } catch (error) {
      console.error("Error updating the product:", error);
    }
  };
 
  
  return (
    <>
     <div className="flex justify-between items-center gap-4">
        <PageHeader>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            size="icon"
            variant="outline"
            className="place-self-center"
          >
            {" "}
            <ChevronLeft size={34} />{" "}
          </Button>

          <h1 className="ml-4">Download {data.name}</h1>
        </PageHeader>
        {/* {message ? <p className="text-primary">{message}!!!</p> : null} */}
      </div>
      <div className="m-3">
      <img className="rounded"  src={IMAGEPATH+data.imagePath} alt="" />
      </div>
      
    </>
  );
}
