import { FaSearch } from "react-icons/fa";
import {useState} from "react"

export default function Search() {
    const [clicked, setClicked] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="w-[90%] rounded-lg absolute top-12 right-auto left-auto bg-white/80 p-5">
            <div id="input" className="flex items-center justify-center gap-3">
                <FaSearch />
                <input type="text" name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-[300px] border-b-4 focus:border-accent outline-none" placeholder="Search Bood Bank"/>
            </div>
           
        </div>
    )
}