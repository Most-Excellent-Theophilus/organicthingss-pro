import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API } from "@/lib/Constants";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import axios from "axios";
import { useEffect, useState } from "react";

type DashData = {
  active_products: number;
  cleared_orders: number;
  not_active_products: number;
  not_cleared_orders: number;
  total_admins: number;
  total_customers: number;
  total_orders: number;
  total_sales: number;
  total_visitors: number;
};
export function Home() {
  const [data, setData] = useState<DashData[]>();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(API + "getDashData");

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
  if (!data) {
    return <>{message}</>
  }
  return (
    <>
      <h1 className="text-xl font-bold m-2 text-primary">Home</h1>
      {loading ? <p>Loading...</p> : null}
      {message ? <p>{message}</p> : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Sales"
          subtitle={`${formatNumber(data.total_orders)} Orders`}
          body={formatCurrency(data.total_sales)}
        />
        <DashboardCard
          title="Customers"
          subtitle={`${formatNumber(data.total_visitors)} Visitors`}
          body={`${formatNumber(data.total_customers)} Customers`}
        />
        <DashboardCard
          title="Active Products"
          subtitle={`${formatNumber(data.active_products)} Not active active`}
          body={`${formatNumber(data.active_products)} Active`}
        />
        <DashboardCard
          title="Orders"
          subtitle={`${formatNumber(data.total_orders)} Not cleared`}
          body={`${formatNumber(data.total_orders)} Total Orders`}
        />
        <DashboardCard
          title="Cleared Orders"
          subtitle={`${formatNumber(data.not_cleared_orders)} Not Delivered`}
          body={`${formatNumber(data.total_orders-data.not_cleared_orders)} Delivered Orders`}

        />
        <DashboardCard
          title="Visitors"
          subtitle={`${formatNumber(data.total_visitors)} Unregistered Users`}
          body={`${formatNumber(data.total_visitors)} Visitors`}
        />
      </div>
    </>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="text-primary">
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
