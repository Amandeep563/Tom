
type ProductImg = {
    url: string;
}


type NewArrivalsProduct = {
    id: string;
    name: string;
    price: number;
    images: ProductImg[];
}


type CartProducts = {
    productId: number,
    name: string,
    size: string,
    color: string,
    quantity: number,
    price: number,
    image: string
}
