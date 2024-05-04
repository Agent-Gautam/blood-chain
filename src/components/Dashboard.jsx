// import { useParams } from "react-router-dom";
// import ClassElement from "./ClassElement";
// import { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { base } from "../context/firebase";

// export default function Dashboard({}) {
//   const { type, id } = useParams();
//   const [classes, setClasses] = useState([]);
//   useEffect(() => {
//     async function fetchdata() {
//       const ref = doc(base, type, id);
//       const UserData = await getDoc(ref);
//       let classData = [];
//       await Promise.all(UserData.data().classes.map(async (c) => {
//         const re = doc(base, "classes", c);
//         const data = await getDoc(re);
//         classData.push({...data.data(), "id": data.id});
//       }));
//       setClasses(classData);
//     }
//     fetchdata();
// }, []);

//   return (
//     <div className="w-full h-[90%] flex flex-col sm:flex-row flex-wrap p-10 gap-10 sm:justify-center">
//       {classes.map((c, id) => (
//         <ClassElement data={c} key={id} type={type} id={id} />
//       ))}
//     </div>
//   );
// }
import { useParams } from "react-router-dom";
import ClassElement from "./ClassElement";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { base } from "../context/firebase";

export default function Dashboard() {
  const { type, id } = useParams();
  const [classes, setClasses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      const ref = doc(base, type, id);
      const UserData = await getDoc(ref);
      let classData = [];
      await Promise.all(UserData.data().classes.map(async (c) => {
        const re = doc(base, "classes", c);
        const data = await getDoc(re);
        classData.push({...data.data(), "id": data.id});
      }));
      setClasses(classData);
      setIsFetching(false);
    }
    fetchData();
  }, [type, id]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full h-[90%] flex flex-col sm:flex-row flex-wrap p-10 gap-10 sm:justify-center">
        {classes.map((c, index) => (
          <ClassElement data={c} key={c.id} type={type} id={c.id} />
        ))}
      </div>
      {isFetching && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center z-50">
          <div className="text-white text-2xl">Fetching...</div>
        </div>
      )}
    </div>
  );
}
