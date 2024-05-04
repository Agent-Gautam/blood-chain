// import React, { useState } from 'react';
// import { BiEdit } from 'react-icons/bi';
// import EditWork from './components/EditWork';
// import AddWork from './components/AddWork';

// export default function Class() {
//     const [edit, setEdit] = useState(false);
//     const [add, setAdd] = useState(false);
//     const classo = {
//         name: 'B.Tech CSE',
//         teacher: 'Navneet Kaur',
//         homework: [
//             {
//                 subject: "science",
//                 title: "chapter 1"
//             },
//             {
//                 subject: "math",
//                 title: "chapter 2"
//             }
//         ]
//     };

//     return (
//         <div className="w-full h-[90%] p-10 bg-blue-100 flex flex-col">
//             <h1 className="text-xl font-bold text-blue-900">{classo.name}</h1>
//             <div id="homework" className="mt-6">
//                 <div className='flex flex-row justify-between'>
//                     <h2 className="text-lg font-semibold text-blue-900">Today's Homework</h2>
//                     <button onClick={() => setEdit(true)}>{<BiEdit />}</button>
//                 </div>
//                 <table className="w-full mt-4">
//                     <thead>
//                         <tr className="bg-blue-200">
//                             <th className="px-4 py-2">Subject</th>
//                             <th className="px-4 py-2">Homework</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {classo.homework.map((item, index) => (
//                             <tr key={index} className="border-b border-blue-300">
//                                 <td className="px-4 py-2">{item.subject}</td>
//                                 <td className="px-4 py-2">{item.title}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <button onClick={() => setAdd(true)} className='w-48 h-10 bg-blue-400 rounded-full'>Add Homework</button>

//             {/* <div id="assignment" className="mt-6">
//                 <div className='flex flex-row justify-between'>
//                     <h2 className="text-lg font-semibold text-blue-900">Today's Assignments</h2>
//                     <button onClick={() => setEdit(true)}>{<BiEdit />}</button>
//                 </div>
//                 <table className="w-full mt-4">
//                     <thead>
//                         <tr className="bg-blue-200">
//                             <th className="px-4 py-2">Subject</th>
//                             <th className="px-4 py-2">Assignment</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {classo.assignment.map((item, index) => (
//                             <tr key={index} className="border-b border-blue-300">
//                                 <td className="px-4 py-2">{item.subject}</td>
//                                 <td className="px-4 py-2">{item.title}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div> */}
//             {edit && <EditWork edit={edit} setEdit={setEdit} homeworks={classo.homework} />}
//             {add && <AddWork setAdd={setAdd} />}
//         </div>
//     );
// }
import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import EditWork from './components/EditWork';
import AddWork from './components/AddWork';

export default function Class() {
    const [editHomework, setEditHomework] = useState(false);
    const [editAssignment, setEditAssignment] = useState(false);
    const [addHomework, setAddHomework] = useState(false);
    const [addAssignment, setAddAssignment] = useState(false);

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
            <div className="w-3/4 mt-8">
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
            </div>

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
