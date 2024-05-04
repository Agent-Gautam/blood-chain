import { useParams } from "react-router-dom";
import ClassElement from "./ClassElement";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { base } from "../context/firebase";

export default function Dashboard({}) {
  const { type, id } = useParams();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const ref = doc(base, type, id);
      const UserData = await getDoc(ref);
      let classData = [];
      await Promise.all(UserData.data().classes.map(async (c) => {
        const re = doc(base, "classes", c);
        const data = await getDoc(re);
        classData.push({...data.data(), "id": data.id});
      }));
      setClasses(classData);
    }
    fetchdata();
}, []);

  return (
    <div className="w-full h-[90%] flex flex-col sm:flex-row flex-wrap p-10 gap-10 sm:justify-center">
      {classes.map((c, id) => (
        <ClassElement data={c} key={id} type={type} id={id} />
      ))}
    </div>
  );
}
