import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import EditWork from './components/EditWork';

export default function Class() {
    const [edit, setEdit] = useState(false);
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
                title: "classwork questions"
            },
            {
                subject: "math",
                title: "classwork questions"
            }
        ]
    };

    return (
        <div className="w-full h-[90%] p-10 bg-blue-100">
            <h1 className="text-xl font-bold text-blue-900">{classo.name}</h1>
            <div id="homework" className="mt-6">
                <div className='flex flex-row justify-between'>
                    <h2 className="text-lg font-semibold text-blue-900">Today's Homework</h2>
                    <button onClick={() => setEdit(true)}>{<BiEdit />}</button>
                </div>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Homework</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classo.homework.map((item, index) => (
                            <tr key={index} className="border-b border-blue-300">
                                <td className="px-4 py-2">{item.subject}</td>
                                <td className="px-4 py-2">{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div id="assignment" className="mt-6">
                <div className='flex flex-row justify-between'>
                    <h2 className="text-lg font-semibold text-blue-900">Today's Assignments</h2>
                    <button onClick={() => setEdit(true)}>{<BiEdit />}</button>
                </div>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classo.assignment.map((item, index) => (
                            <tr key={index} className="border-b border-blue-300">
                                <td className="px-4 py-2">{item.subject}</td>
                                <td className="px-4 py-2">{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {edit && <EditWork edit={edit} setEdit={setEdit} homeworks={classo.homework} />}
        </div>
    );
}
