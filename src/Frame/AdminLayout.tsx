import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <>
      <div className="flex mt-5">
        <div className=" m-4 place-self-center">
          <img
            src="../public/org-logo.png"
            className="w-1/2 md:w-1/4"
            alt="logo img"
          />
        </div>
        <ul className="place-self-center pr-5  sm:hidden md:flex ">
          <li>
            <Button asChild variant="link">
              <NavLink to="home">Home</NavLink>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <NavLink to="orders">Customers</NavLink>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <NavLink to="products">Products</NavLink>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <NavLink to="sales">Sales</NavLink>
            </Button>
          </li>
        </ul>
        <div className="flex place-items-center md:hidden mr-2 ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu color="green" size={34} strokeWidth={1} />
              <span className="sr-only">Drop Down Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <NavLinkDrop to="home" text="Home" />
              <NavLinkDrop to="orders" text="Customers" />
              <NavLinkDrop to="products" text="Products" />
              <NavLinkDrop to="sales" text="Sales" />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="m-5">
        <Outlet />
      </div>
    </>
  );
}

type navLinkDropProps = {
  to: string;
  text: string;
};

function NavLinkDrop({ to, text }: navLinkDropProps) {
  return (
    <DropdownMenuItem asChild>
      <NavLink to={to} className="px-16 py-3 text-primary text-base">
        {text}
      </NavLink>
    </DropdownMenuItem>
  );
}
