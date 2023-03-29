interface BoxD {
    price: number,
    original_price: number,
    listing_id: string,
    products: Array<{ title: string, description: string, level: number, amount: number }>
}


interface BoxData {
    box_data: BoxD
    req_id: {id: string}
}
export default BoxData;