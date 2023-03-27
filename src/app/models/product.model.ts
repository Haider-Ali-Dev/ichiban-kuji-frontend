interface Product {
    id: string;
    box_id: string;
    title: string;
    description: string;
    level: number;
    status: boolean;
    created_at: string;
    amount: number;
    image: string;
    available: number;
    ini_amount: number;
}

export default Product;