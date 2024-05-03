import React, { useState } from 'react';

export default function Class() {
    const [editing, setEditing] = useState(false);
    const [newSubject, setNewSubject] = useState({ name: '', homework: '' });
    const [subjects, setSubjects] = useState([
        { name: 'science', homework: 'hello' },
        { name: 'math', homework: 'cha 1' }
    ]);

    const classo = {
        name: 'B.Tech CSE',
        teacher: 'Navneet Kaur',
        homework: {
            'science': "hello ",
            'math': "cha 1"
        },
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


    const handleChange = (index, field, value) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index][field] = value;
        setSubjects(updatedSubjects);
    };

    const handleNewSubjectChange = (field, value) => {
        setNewSubject({ ...newSubject, [field]: value });
    };

    const handleSave = () => {
        // Save data
        setEditing(false);
    };

    const handleAddSubject = () => {
        setSubjects([...subjects, { ...newSubject }]);
        setNewSubject({ name: '', homework: '' });
    };

    return (
        <div className="w-full h-full p-10 bg-blue-100">
            <h1 className="text-xl font-bold text-blue-900">{classo.name}</h1>
            <div id="homework" className={`mt-6 ${editing ? '' : 'pointer-events-none'}`}>
                <h2 className="text-lg font-semibold text-blue-900">Today's Homework</h2>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Homework</th>
                            {editing && <th className="px-4 py-2">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject, index) => (
                            <tr key={index} className="border-b border-blue-300">
                                <td className="px-4 py-2">
                                    {editing ? (
                                        <input
                                            type="text"
                                            value={subject.name}
                                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                                            className="w-full bg-white rounded-md px-2 py-1"
                                        />
                                    ) : (
                                        subject.name
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {editing ? (
                                        <input
                                            type="text"
                                            value={subject.homework}
                                            onChange={(e) => handleChange(index, 'homework', e.target.value)}
                                            className="w-full bg-white rounded-md px-2 py-1"
                                        />
                                    ) : (
                                        subject.homework
                                    )}
                                </td>
                                {editing && (
                                    <td className="px-4 py-2">
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                        {editing && (
                            <tr className="border-b border-blue-300">
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        value={newSubject.name}
                                        onChange={(e) => handleNewSubjectChange('name', e.target.value)}
                                        className="w-full bg-white rounded-md px-2 py-1"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        placeholder="Homework"
                                        value={newSubject.homework}
                                        onChange={(e) => handleNewSubjectChange('homework', e.target.value)}
                                        className="w-full bg-white rounded-md px-2 py-1"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={handleAddSubject} className="bg-blue-500 text-white px-2 py-1 rounded-md">Add</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {editing && (
                    <div className="mt-4">
                        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                    </div>
                )}
            </div>
        </div>
    );
}
