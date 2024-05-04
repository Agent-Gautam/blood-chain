import { useState } from "react";
import "./App.css";
import Signup from "./auth/Signup";
import Dashboard from "./components/Dashboard";
import Classo from "./Classo";
import Login from "./auth/Login";
import Roles from "./auth/Roles"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const usertype = "parent"

  return (
    // <div id='app' className='w-full h-full light selection:bg-accent selection:text-white'>
    //   {/* <Auth /> */}
    //   <Signup  />
    //   {/* <Dashboard /> */}
    //   {/* <Classo /> */}
    // </div>
      // <header className="h-12">
      //   <Link to="/">
      //     Home
      //   </Link>
      //   <div></div>
      // </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Roles />} />
        <Route path="/:type/login" element={<Login />} />
        <Route path="/:type/signup" element={<Signup />} />
        <Route path="/:type/:id/dashboard" element={<Dashboard />} />
        <Route path="/:type/:id/:classid" element={<Classo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
