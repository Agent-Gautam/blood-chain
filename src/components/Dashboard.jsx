import { useParams } from "react-router-dom"
import ClassElement from "./ClassElement"
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { base } from "../context/firebase";

export default function Dashboard({}) {
    const {type, id} = useParams();
    const [classData, setClassData] = useState([]);
    useEffect(async () => {
        const ref = doc(base, type, id);
        const UserData = await getDoc(ref);
        console.log(UserData.data());
    },[])
    let classes = [
        {
            name: 'B.Tech CSE',
            teacher: 'Navneet Kaur',
            homework: {
                'science': "hello ",
                'math': "cha 1"
            },
            assignment: [
                '7827323892',
                '3878734793'
            ]
        },
        {
            name: 'B.Tech CSE',
            teacher: 'Navneet Kaur',
            homework: {
                'science': "hello ",
                'math': "cha 1"
            },
            assignment: [
                '7827323892',
                '3878734793'
            ]
        }
    ]
    return (
        <div className="w-full h-[90%] flex flex-col sm:flex-row flex-wrap p-10 gap-10 sm:justify-center" >
            {classes.map((c, id) => <ClassElement data={c} key={id} />)}
        </div>
    )
}
