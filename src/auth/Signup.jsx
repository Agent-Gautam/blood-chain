import React, { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [classes, setClasses] = useState([{ class: 'I', selectedValue: '1' }]); // Initial state with one class 'I'

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const addClass = () => {
        const nextClass = String.fromCharCode(classes.length + 73); // ASCII value for 'I' is 73
        setClasses([...classes, { class: nextClass, selectedValue: '1' }]);
    };

    const handleSelectChange = (index, event) => {
        const newClasses = [...classes];
        newClasses[index].selectedValue = event.target.value;
        setClasses(newClasses);
    };

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-blue-300 to-green-400">
            <div className="bg-white bg-opacity-90 w-96 rounded-xl shadow-md p-10 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-gray-700">Join our educational platform by signing up</p>
                <form className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email" className="text-gray-800">Email Address</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full h-10 px-4 rounded-md shadow-md border border-gray-300 focus:outline-none focus:border-blue-400" placeholder="Enter your email address" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password" className="text-gray-800">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full h-10 px-4 rounded-md shadow-md border border-gray-300 focus:outline-none focus:border-blue-400" placeholder="Enter your password" />
                    </div>
                    {classes.map((classOption, index) => (
                        <div key={index} className="w-full flex flex-col gap-2">
                            <label htmlFor={`class${index}`} className="text-gray-800">{`Class ${classOption.class}`}</label>
                            <select id={`class${index}`} value={classOption.selectedValue} onChange={(event) => handleSelectChange(index, event)} className="w-full h-10 px-4 rounded-md shadow-md border border-gray-300 focus:outline-none focus:border-blue-400">
                                {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <button type="button" onClick={addClass} className="w-full h-10 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
                        + Add Class
                    </button>
                    <button type="submit" className="w-full h-12 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="absolute bottom-0 right-0 hidden lg:block">
                <img src="./assets/checkup.jpg" alt="checkup image" />
            </div>
        </div>
    );
}
