import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const NewArrivals = () => {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
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

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? - 300 : 300
        scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" })
    }

    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable)

        }


        console.log({
            scrollLeft: container.scrollLeft,
            clientWidth: container.clientWidth,
            containerScrollWidth: container.scrollWidth,
        });

    }

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons();
        }
    })
    return (
        <section className="container mx-auto text-center m-10 relative">
            <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
            <p className="text-lg text-gray-600 mb-8">Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.</p>
            {/* scroll */}
            <div className=" flex space-x-2 justify-end mb-3">
                <button onClick={() => scroll("left")} disabled={!canScrollLeft} className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    <ChevronLeft className="text-2xl" />
                </button>
                <button onClick={() => scroll("right")} disabled={!canScrollRight} className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                    <ChevronRight className="text-2xl" />
                </button>
            </div>

            <div ref={scrollRef} className="container mx-auto overflow-x-scroll flex space-x-6 relative">
                {newArrivals.map((product) => (
                    <div key={product.id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                        <img
                            src={product.images[0].url}
                            alt={product.name}
                            className="w-full h-[500px] object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-white/15 backdrop-blur-md text-white p-4 rounded-b-lg flex flex-col justify-start items-start gap-0 ">
                            <Link to={`/product/${product.id}`} className="block">
                                <h4 className="font-medium leading-tight m-0 p-0">{product.name}</h4>
                                <p className="m-0 p-0">${product.price}</p>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrivals
