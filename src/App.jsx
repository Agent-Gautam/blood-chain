import { useState } from "react";
import "./App.css";
import Auth from "./auth/roles";
import Signup from "./auth/Signup";
import Dashboard from "./components/Dashboard";
import Class from "./Class";
import Classo from "./Classo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id='app' className='w-full h-full light selection:bg-accent selection:text-white'>
      {/* <Auth /> */}
      {/* <Signup /> */}
      {/* <Dashboard /> */}
      {/* <Classo /> */}
    // </div>
    // <BrowserRouter>
    //   <header>
    //     <Link className="site-logo" to="/">
    //       Home
    //     </Link>
    //     <nav>
    //       <Link to="/about">About</Link>
    //       <Link to="/vans">Vans</Link>
    //     </nav>
    //   </header>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //     <Route path="/vans/:id" element={<VanDetail />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
