import { Trash } from "lucide-react"

type CartProducts = {
    productId: number,
    name: string,
    size: string,
    color: string,
    quantity: number,
    price: number,
    image: string
}


const CartContent = () => {
    const cartProducts: CartProducts[] = [
        {
            productId: 1,
            name: "Sourav",
            size: "M",
            color: "Red",
            quantity: 3,
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
        },
        {
            productId: 3,
            name: "Aman",
            size: "M",
            color: "White",
            quantity: 1,
            price: 50,
            image: "https://picsum.photos/200?random=1"
        }

    ]
    return (
        <div>
            {cartProducts.map((product) => (
                <div
                    key={product.productId}
                    className="flex items-start justify-between py-4 border-b"
                >
                    <div className="flex items-start">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-24 object-cover mr-4 rounded"
                        />
                        <div>
                            <h3>{product.name}</h3>
                            <p className="text-sm text-gray-500">size: {product.size} | color: {product.color}</p>
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                                <span className="mx-4">{product.quantity}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">$ {product.price.toLocaleString()}</p>
                        <button>
                            <Trash className="h-6 w-6 text-red-600" />
                        </button>
                    </div>
                </div>
            ))
            }
        </div >)
}

export default CartContent
