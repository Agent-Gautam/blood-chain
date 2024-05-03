import { useState } from "react";
import "./App.css";
import Auth from "./auth/Auth";
import Signup from "./assets/Signup";
import Dashboard from "./components/Dashboard";
import Classo from "./Classo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);


  return (
    // <div id='app' className='w-full h-full light selection:bg-accent selection:text-white'>
    //   {/* <Auth /> */}
    //   {/* <Signup /> */}
    //   {/* <Dashboard /> */}
    //   <Classo />
    // </div>
    <BrowserRouter>
      <header className="h-12">
        <Link to="/">
          Home
        </Link>
        <nav>
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/navneetkaur">Vans</Link> */}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Class:id" element={<Classo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
