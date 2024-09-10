import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import axios from "axios";
import { ADMIN, API, PRODUCTS } from "@/lib/Constants";
import { useEffect, useState } from "react";
import { Activity, ChartNoAxesColumn, CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Product = {
  available: string;
  created_at: string;
  description: string;
  id: number;
  imagePath: string;
  name: string;
  priceInMWK: number;
  slug: string;
  updated_at: string;
  order_count: number;
};

export function Products() {
  const [products, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get(API + PRODUCTS+ADMIN);
      console.log(API + PRODUCTS+ADMIN)
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setMessage('Server not responding')
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link to="new">Add Product</Link>
        </Button>
      </div>
      
    
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">
            <ChartNoAxesColumn />
              <span className="sr-only">Available For Purchase</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead className="w-0">
            <Activity />
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        { loading? <div className="m-5 text-primary">Loading...</div>: null}
        { message? <div className="m-5 text-primary">{message}</div>: null}
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {product.available ==='true' ? (
                  <>
                    <span className="sr-only">Available</span>
                    <CheckCircle2 color="#85b740" />
                  </>
                ) : (
                  <>
                    <span className="sr-only">Unavailable</span>
                    <XCircle className="stroke-destructive" />
                  </>
                )}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{formatCurrency(product.priceInMWK)+ `.00`}</TableCell>
              <TableCell>{formatNumber(product.order_count)}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link
                        download
                        to={`download/${product.id}`}
                      >
                        Download
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`edit/${product.id}`}>
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem  asChild>

                      <Link  to={`productStatus/${product.id}/${product.available}`}>
                      {product.available ==='true' ? "Deactivate" : "Activate"}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem  asChild>
                      <Link className="text-red-500" to={`delete/${product.id}`}>
                       Delete
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
           
        </TableBody>
      </Table>
    </>
  );
}
