import Product from "./product.model";

interface Box {
    id: string;
    price: number;
    listing_id: string;
    created_at: string;
    products: Product[];
    total: number;
    available_products: number;
}

export default Box;