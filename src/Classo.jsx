import React from 'react';

export default function Class() {
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

    return (
        <div className="w-full h-full p-10 bg-blue-100">
            <h1 className="text-xl font-bold text-blue-900">{classo.name}</h1>
            <div id="homework" className="mt-6">
                <h2 className="text-lg font-semibold text-blue-900">Today's Homework</h2>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Homework</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(classo.homework).map(([subject, homework], index) => (
                            <tr key={index} className="border-b border-blue-300">
                                <td className="px-4 py-2">{subject}</td>
                                <td className="px-4 py-2">{homework}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div id="assignments" className="mt-6">
                <h2 className="text-lg font-semibold text-blue-900">Assignments</h2>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classo.assignment.map((assignment, index) => (
                            <tr key={index} className="border-b border-blue-300">
                                <td className="px-4 py-2">{assignment.subject}</td>
                                <td className="px-4 py-2">{assignment.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
