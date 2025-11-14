import { ChevronLeft, ChevronRight } from "lucide-react";


const NewArrivals = () => {
    const newArrivals: NewArrivalsProduct[] = [
        {
            id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1"
                }
            ]
        },
        {
            id: "2",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2"
                }
            ]
        },
        {
            id: "3",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3"
                }
            ]
        },
        {
            id: "4",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4"
                }
            ]
        },
        {
            id: "5",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5"
                }
            ]
        },
        {
            id: "6",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6"
                }
            ]
        },
        {
            id: "7",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7"
                }
            ]
        }
    ]
    return (
        <section className="container mx-auto text-center m-10 relative">
            <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
            <p className="text-lg text-gray-600 mb-8">Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.</p>
            {/* scroll */}
            <div className=" flex space-x-2 justify-end mb-3">
                <button className="p-2 rounded border bg-white text-black">
                    <ChevronLeft className="text-2xl" />
                </button>
                <button className="p-2 rounded border bg-white text-black">
                    <ChevronRight className="text-2xl" />
                </button>
            </div>

            <div className="container mx-auto overflow-x-scroll flex space-x-6 relative">
                {newArrivals.map((product) => (
                    <div key={product.id}>
                        <img
                            src={product.images[0].url}
                            alt={product.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrivals
