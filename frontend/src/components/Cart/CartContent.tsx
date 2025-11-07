const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "Sourav",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 1500,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Avijt",
            size: "S",
            color: "Black",
            quantity: 1,
            price: 350,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 3,
            name: "Aman",
            size: "M",
            color: "White",
            quantity: 1,
            price: 500,
            image: "https://picsum.photos/200?random=1"
        }

    ]
    return (
        <div>CartContent</div>
    )
}

export default CartContent
