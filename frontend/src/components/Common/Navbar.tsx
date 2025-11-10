import { CircleX, Menu, ShoppingCart, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "../Layout/CartDrawer";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false)

    const ToggleNavBar = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    const handleToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-3 px-6">
                <div>
                    <Link to="/" className="text-2xl  font-bold">
                        Tom
                    </Link>
                </div>
                {/* Center Navi */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="#"
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Men{" "}
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Women
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Top Wear
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                    >
                        Bottom Wear
                    </Link>
                </div>
                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <Link to="/profile" className="hover:text-black">
                        <UserRound className="w-6 h-6 text-gray-700" />
                    </Link>
                    <button onClick={handleToggle} className="relative hover:text-black">
                        <ShoppingCart className="w-6 h-6 text-gray-700x" />
                        <span className="absolute -top-1 bg-cat-red text-white text-xs rounded-full px-2 py-0.5">
                            69
                        </span>
                    </button>
                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>

                    <button className="md:hidden" onClick={ToggleNavBar}>
                        <Menu className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} handleToggle={handleToggle} />
            {/* mobile Nav */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
    ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={ToggleNavBar}>
                        <CircleX className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                <div className="flex flex-col space-y-6 p-6">
                    <Link onClick={ToggleNavBar} className="text-lg font-medium text-gray-700" to="#">Men</Link>
                    <Link onClick={ToggleNavBar} className="text-lg font-medium text-gray-700" to="#">Women</Link>
                    <Link onClick={ToggleNavBar} className="text-lg font-medium text-gray-700" to="#">Top Wear</Link>
                    <Link onClick={ToggleNavBar} className="text-lg font-medium text-gray-700" to="#">Bottom Wear</Link>
                </div>
            </div> </>
    );
};

export default Navbar;
