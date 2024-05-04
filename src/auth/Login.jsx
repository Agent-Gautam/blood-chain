// import { useState } from "react";
// import { useParams, Link, Navigate } from "react-router-dom";
// import { parentCol, teacherCol, base } from "../context/firebase";
// import { doc } from "firebase/firestore";

// export default function Login() {
//   const { type } = useParams();
//   const [user, setUser] = useState({ id: "", password: "" });

//   async function checkUser() {
//     <Navigate to={`/${type}/dashboard`} />
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   }

//   return (
//     <div>
//       <div>
//         <label htmlFor="id">Id</label>
//         <input type="id" name="id" value={user.id} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={checkUser}>Login</button>
//       <p>
//         Don't have an account? <Link to={`/${type}/signup`}>Sign Up</Link>
//       </p>
//     </div>
//   );
// }
import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { parentCol, teacherCol, base } from "../context/firebase";
import { getDocs } from "firebase/firestore";

export default function Login() {
  const { type } = useParams();
  const [user, setUser] = useState({ id: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  async function checkUser() {
    const querySnapshot = await getDocs(parentCol);
    querySnapshot.docs.forEach((doc) => {
        if(doc.id === user.id) setLoggedIn(true);
    ;
  });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  if(loggedIn) {
    return <Navigate to={`/${type}/${user.id}/dashboard`} />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-white to-sky-200">
      <div className="w-[400px] bg-white rounded-xl shadow-md p-10 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <div className="w-full">
          <label htmlFor="id" className="text-gray-700">
            Id
          </label>
          <input
            type="id"
            name="id"
            value={user.id}
            onChange={handleChange}
            className="w-full h-10 px-3 mt-1 mb-5 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full h-10 px-3 mt-1 mb-5 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          onClick={checkUser}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Login
        </button>
        <p className="text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to={`/${type}/signup`} className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
