import Box from "./box.model";


interface Listing {
    image: string;
    boxes: Box[];
    id: string;
    title: string;
    created_at: string;
    box_count: number;
    tty: string;
}

export default Listing;