import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";

export default function Header({navbar,setNavbar}) {
    const [search, setSearch] = useState(false);
    return (
        <div className="flex flex-row w-full h-16 bg-accent items-center px-5 col-span-2 row-span-1">
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={20} /> : <GiHamburgerMenu />}
          </button>

          <div id="logo" className="w-36 h-10 bg-gray-200/50 rounded-xl text-center">
            Blood Chain
          </div>
          {search &&  <Search />}
          <button className="fixed right-5 flex items-center justify-center h-7" onClick={() => setSearch(!search)}>{search ? <IoCloseCircleSharp size={20} /> : < FaSearch />}</button>
        </div>
    )
}