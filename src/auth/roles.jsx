// import {useState} from 'react';

// export default function Auth() {
//     const [userType, setUserType] = useState("");
//     return (
//         <div id="auth" className="flex w-full h-full bg-white">
//             <div id="centerpane" className="w-[80%] h-[80%] flex-col flex bg-button items-center justify-around">
//                 <div id='heading' className='flex flex-col items-center gap-7'>
//                     <h1 className='text-text2 text-4xl font-bold'>Please Select your role!</h1>
//                     <span className='text-blue-500 text-lg font-semibold'>as</span>
//                 </div>
//                 <div id="auth-buttons" className='flex flex-col  w-[300px] gap-10 items-center'>
//                     <button id="user" className='bg-button w-48 h-12 rounded-full text-textbg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'>User</button>
//                     <button id="Organization" className='bg-button w-48 h-12 rounded-full text-textbg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'>Organization</button>
//                     <button id="Blood Bank" className='bg-button w-48 h-12 rounded-full text-textbg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'>Blood Bank</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// import React, { useState } from 'react';

// export default function Auth() {
//     const [userType, setUserType] = useState("");
//     return (
//         <div id="auth" className="flex justify-center items-center w-full h-screen bg-gray-100">
//             <div id="centerpane" className="w-96 h-auto flex flex-col bg-white p-8 rounded-lg shadow-md">
//                 <div id='heading' className='flex flex-col items-center mb-6'>
//                     <h1 className='text-gray-800 text-3xl font-bold mb-2'>Please Select Your Role</h1>
//                     <span className='text-blue-500 text-lg font-semibold'>as</span>
//                 </div>
//                 <div id="auth-buttons" className='flex flex-col gap-4 items-center'>
//                     <button id="user" className='bg-blue-500 w-full h-12 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out'>User</button>
//                     <button id="organization" className='bg-blue-500 w-full h-12 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out'>Organization</button>
//                     <button id="blood-bank" className='bg-blue-500 w-full h-12 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out'>Blood Bank</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Auth() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (type) => {
        setSelected(type);
    };

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-white to-sky-200">
            <div className="w-96 bg-white p-8 rounded-lg shadow-md">
                <div className='flex flex-col items-center mb-6'>
                    <h1 className='text-gray-800 text-3xl font-bold mb-2'>Welcome to our Educational Platform!</h1>
                    <p className='text-blue-500 text-lg font-semibold'>Please select your role</p>
                </div>
                <div className='w-full flex-col gap-4 items-center'>
                    <Link to={"/parents/login"} >
                        <button 
                            className={`bg-blue-500 w-full h-[50px] my-2 rounded-lg text-white font-semibold transition duration-300 ease-in-out ${
                                selected === 'parent' && 'bg-blue-600'
                            } hover:bg-blue-700`}
                            onClick={() => handleSelect('parent')}
                        >
                            {selected === 'parent' ? '✔ Parent' : 'Parent'}
                        </button>
                    </Link>
                    <Link to={"/teachers/login"} >
                        <button 
                            className={`bg-blue-500 w-full h-[50px] rounded-lg text-white font-semibold transition duration-300 ease-in-out ${
                                selected === 'teacher' && 'bg-blue-600'
                            } hover:bg-blue-700`}
                            onClick={() => handleSelect('teacher')}
                        >
                            {selected === 'teacher' ? '✔ Teacher' : 'Teacher'}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
