import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import EditWork from './components/EditWork';
import AddWork from './components/AddWork';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { base } from './context/firebase';

export default function Classo() {
    const [editHomework, setEditHomework] = useState(false);
    const [editAssignment, setEditAssignment] = useState(false);
    const [addHomework, setAddHomework] = useState(false);
    const [addAssignment, setAddAssignment] = useState(false);
    const [classData, setClassData] = useState({});
    const {type, id, classid} = useParams();
    useEffect(() => {
        async function fetchdata() {
            const ref = doc(base, "classes", classid);
            const classdata = await getDoc(ref);
        }
    },[])

    const classo = {
        name: 'B.Tech CSE',
        teacher: 'Navneet Kaur',
        homework: [
            {
                subject: "science",
                title: "chapter 1"
            },
            {
                subject: "math",
                title: "chapter 2"
            }
        ],
        assignment: [
            {
                subject: "math",
                title: "classwork questions",
                deadline: "2024-05-20"
            },
            {
                subject: "math",
                title: "classwork questions",
                deadline: "2024-05-22"
            }
        ]
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center p-10 bg-blue-100">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">{classo.name}</h1>

            {/* Today's Homework */}
            <div className="w-3/4">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Today's Homework</h2>
                <div className="overflow-x-auto">
                    <div className="bg-white rounded-md shadow-md">
                        <table className="w-full table-fixed">
                            <thead className="bg-blue-200 text-blue-900">
                                <tr>
                                    <th className="px-4 py-2 border border-black">Subject</th>
                                    <th className="px-4 py-2 border border-black">Homework</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classo.homework.map((item, index) => (
                                    <tr key={index} className={(index % 2 === 0) ? "bg-blue-100" : "bg-white"}>
                                        <td className="px-4 py-2 border border-black">{item.subject}</td>
                                        <td className="px-4 py-2 border border-black">{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Edit Homework and Add Homework Buttons */}
            <div className="flex justify-center w-3/4 mt-4">
                <button onClick={() => setEditHomework(true)} className="mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center">
                    <BiEdit className="mr-2" /> Edit Homework
                </button>

                <button onClick={() => setAddHomework(true)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center">
                    <BiEdit className="mr-2" /> Add Homework
                </button>
            </div>

            {/* Today's Assignments */}
            {/* <div className="w-3/4 mt-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Today's Assignments</h2>
                <div className="overflow-x-auto">
                    <div className="bg-white rounded-md shadow-md">
                        <table className="w-full table-fixed">
                            <thead className="bg-blue-200 text-blue-900">
                                <tr>
                                    <th className="px-4 py-2 border border-black">Subject</th>
                                    <th className="px-4 py-2 border border-black">Assignment</th>
                                    <th className="px-4 py-2 border border-black">Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classo.assignment.map((item, index) => (
                                    <tr key={index} className={(index % 2 === 0) ? "bg-blue-100" : "bg-white"}>
                                        <td className="px-4 py-2 border border-black">{item.subject}</td>
                                        <td className="px-4 py-2 border border-black">{item.title}</td>
                                        <td className="px-4 py-2 border border-black">{item.deadline}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}

            {/* Edit Assignment and Add Assignment Buttons */}
            <div className="flex justify-center w-3/4 mt-4">
                <button onClick={() => setEditAssignment(true)} className="mr-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center">
                    <BiEdit className="mr-2" /> Edit Assignment
                </button>

                <button onClick={() => setAddAssignment(true)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center">
                    <BiEdit className="mr-2" /> Add Assignment
                </button>
            </div>

            {/* Modals for Editing and Adding */}
            {editHomework && <EditWork edit={editHomework} setEdit={setEditHomework} data={classo.homework} />}
            {addHomework && <AddWork add={addHomework} setAdd={setAddHomework} />}
            {editAssignment && <EditWork edit={editAssignment} setEdit={setEditAssignment} data={classo.assignment} />}
            {addAssignment && <AddWork add={addAssignment} setAdd={setAddAssignment} />}
        </div>
    );
}
