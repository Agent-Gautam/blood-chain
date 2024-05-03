
// export default function Signup() {
//     return (
//         <div id="signup" className="w-full h-full bg-background flex items-center justify-center p-5 md:shadow-[20px_20px_10px_red_inset,_50px_50px_0px_#FF9090_inset] shadow-[5px_5px_0px_red_inset,_15px_15px_0px_#FF9090_inset]">
//             <button className="absolute top-10 left-5 md:top-20 md:left-20 bg-accent w-20 h-8 rounded-l-xl ">Back</button>
//             <div id="signupform" className="w-[400px] bg-white rounded-xl shadow-[2px_2px_10px_#FEDCDC] flex flex-col items-center p-10 gap-16">
//                 <h1 className="text-2xl font-bold">Sign Up</h1>
//                 <div id="inputs" className="w-full flex flex-col gap-6">
//                     <div id="email" className="w-full flex flex-col h-20 gap-2">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" name="email" id="email" className="w-full h-10 rounded-xl bg-background text-text2 shadow-[2px_2px_2px_#FE6161] pl-5"/>
//                     </div>
//                     <div id="password" className="w-full flex flex-col h-20 gap-2">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" name="password" id="password" className="w-full h-10 rounded-xl bg-background text-text2 shadow-[2px_2px_2px_#FE6161] pl-5"/>
//                     </div>
//                     <div id="phone" className="w-full flex flex-col h-20 gap-2">
//                         <label htmlFor="phone">phone</label>
//                         <input type="text" name="phone" id="phone" className="w-full h-10 rounded-xl bg-background text-text2 shadow-[2px_2px_2px_#FE6161] pl-5"/>
//                     </div>
//                     <button className="bg-[#97FF73] w-48 h-10 rounded-xl self-center">Register</button>
//                 </div>
//             </div>
//             <div id="image" className="absolute bottom-10 right-5 hidden lg:block">
//                 <img src="./assets/checkup.jpg" alt="checkup image" />
//             </div>
//         </div>
//     )
// }

import { BsGoogle } from "react-icons/bs";

// import React from 'react';

export default function Signup() {
    return (
        <div id="signup" className="w-full h-full bg-gray-100 flex items-center justify-center">
            <button className="absolute top-5 left-5 bg-gray-200 px-4 py-2 rounded-md">Back</button>
            <div id="signupform" className="w-[400px] bg-white rounded-xl shadow-md p-10 flex flex-col items-center gap-6">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-gray-600">Join our educational platform by signing up</p>
                    <button className="flex items-center justify-center gap-4 w-full h-12 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none">
                       <BsGoogle /> Google
                    </button>
            </div>
            <div id="image" className="absolute bottom-0 right-0 lg:block">
                <img src="./assets/checkup.jpg" alt="checkup image" />
            </div>
        </div>
    )
}
