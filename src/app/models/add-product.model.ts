interface AddProduct {
    req_id: {
        id: string
    },
    box_id: string,
    product_data: Array<{
        title: string,
        description: string,
        amount: number,
        level: number
    }>
}

export default AddProduct;