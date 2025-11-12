import { Facebook, Instagram, Twitter } from "lucide-react";

const Topbar = () => {
    return (
        <div className="bg-cat-red text-white">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <Facebook className="h-5 w-5" />
                    </a>
                </div>
                <div className="text-sm text-center grow">
                    <span>We ship Only in India 🇮🇳 - Fast and reliable Shipping</span>
                </div>
                <div className="text-sm hidden md:block">
                    <a href="tel:123456789" className="hover:text-gray-300">
                        +91 123456789
                    </a>{" "}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
