import { Button } from "@/components/ui/button";
import { FaWhatsapp } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, Menu, PhoneCall } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

export function CustomerLayout() {
  return (
    <>
      <div className="flex text-sm tracking-wider fixed font-light bg-secondary p-2 z-50 rounded outline-double outline-green-600 sm:left-6">
        <Link to="tel:+265992673243" className="underline text-primary mx-3 flex ">
          <PhoneCall />
          <span className="ml-1">Call us</span> 
        </Link>
        <Link
          to="https://wa.me/+265992673243"
          className="underline text-primary mx-3 flex"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaWhatsapp  className="mr-1 " size={23} />
          <span>WhatsApp</span>
        </Link>
        <Link
          to="mailto:mkamanagsamuel255@gmail.com"
          className="underline text-primary mx-3 flex"
        >
          <Mail />
          <span className="ml-1">email us</span> 
        </Link>
      
      </div>
      <div className="flex mt-5 pt-8">
        <div className=" m-4 place-self-center">
          <img
            src="../public/org-logo.png"
            className="w-1/2 md:w-1/4"
            alt="logo img"
          />
        </div>
        <ul className="place-self-center pr-5  sm:hidden md:flex border rounded ">
          <li>
            <Button asChild variant="link">
              <NavLink to="home">Home</NavLink>
            </Button>
          </li>
          <li>
            <Button asChild variant="link">
              <NavLink to="products">Products</NavLink>
            </Button>
          </li>

          <li>
            <Button asChild variant="link">
              <NavLink to="orders">My Orders</NavLink>
            </Button>
          </li>

          <li>
            {/* <Button asChild variant="link">
              <NavLink to="cart">
                {" "}
                <ShoppingCart />
                <p className="p-1">0</p>{" "}
              </NavLink>
            </Button> */}
          </li>
        </ul>
        <div className="flex place-items-center md:hidden mr-2 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="border rounded-lg">
              <Menu color="#8fbb52" size={36} strokeWidth={3} />
              <span className="sr-only">Drop Down Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <NavLinkDrop to="home" text="Home" />
              <NavLinkDrop to="products" text="Products" />
              <NavLinkDrop to="orders" text="My Orders" />
              {/* <NavLinkDrop to="cart" text="Cart" /> */}
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
      <NavLink to={to} className="px-36 py-3 text-primary text-base">
        {text}
      </NavLink>
    </DropdownMenuItem>
  );
}
