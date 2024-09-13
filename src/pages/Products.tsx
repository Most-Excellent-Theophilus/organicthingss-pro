import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { API, Product, PRODUCTS } from "@/lib/Constants";

import axios from "axios";
import { useEffect, useState } from "react";


export function Products() {
  const [products, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(API + PRODUCTS);
      console.log(API + PRODUCTS);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setMessage("Server not responding");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products, message);
  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    );

  return (
    <>
     
      <div className=" rounded-lg p-2 ">
        <h1 className="text-primary text-2xl font-bold my-5 ">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
      
    </>
  );
}
