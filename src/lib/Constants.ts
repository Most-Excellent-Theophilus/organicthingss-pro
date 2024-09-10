const dir = "http://127.0.0.1:8000/"
export const API = dir+"api/"
export const PRODUCTS = "products/"
export const ADMIN = "admin"
export const IMAGEPATH =dir+"storage/"

export type Product = {
    available: string;
    created_at: string;
    description: string;
    id: number;
    imagePath: string;
    name: string;
    priceInMWK: number;
    slug: string;
    updated_at: string;
  };
