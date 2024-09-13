const dir = "http://192.168.92.113:8000/"
export const API = dir+"api/"
export const PRODUCTS = "products/"
export const ADMIN = "admin"
export const IMAGEPATH =dir+"storage/"

export type Product = {
    available: string;
    created_at: string;
    description: string;
    id: string;
    imagePath: string;
    name: string;
    priceInMWK: string;
    slug: string;
    updated_at: string;
  };

