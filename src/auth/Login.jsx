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
    <div>
      <div>
        <label htmlFor="id">Id</label>
        <input type="id" name="id" value={user.id} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={checkUser}>Login</button>
      <p>
        Don't have an account? <Link to={`/${type}/signup`}>Sign Up</Link>
      </p>
    </div>
  );
}
