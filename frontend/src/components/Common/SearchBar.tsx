import { CircleX, Search } from "lucide-react"
import { useState } from "react"


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
            {isOpen ?
                (<form className="relative flex items-center justify-center w-full">
                    <div className="relative w-1/2">
                        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" value={searchTerm} className="bg-gray-100 py-2 px4 pl-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700" />
                        {/* Search icon */}
                        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
                            <Search />
                        </button>
                    </div>
                    {/* Close Button */}
                    <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" onClick={handleSearchToggle}>
                        <CircleX />
                    </button>
                </form>) :
                (<button onClick={handleSearchToggle}>
                    <Search />
                </button>

                )}
        </div>
    )
}


export default SearchBar
