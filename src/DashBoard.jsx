import { useState, useEffect } from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Window from './Window'

export default function DashBoard() {
  const [navbar, setNavbar] = useState(
    window.innerWidth >= "1024" ? true : false
  );
  
  //navbar seting useEffect
  useEffect(() => {
    function handleResize() {
      setNavbar(window.innerWidth >= 1024 ? true : false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="dashboard" className="w-full h-full bg-red-100 overflow-hidden flex flex-col">
        <Header navbar={navbar} setNavbar={setNavbar} />
        <div className="flex flex-row w-full h-full">
            {navbar && <Navbar setNavbar={setNavbar} />}
            <Window navbar={navbar} />
        </div>
    </div>
  );
}
