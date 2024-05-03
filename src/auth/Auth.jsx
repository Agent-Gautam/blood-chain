import {useState} from 'react';

export default function Auth() {
    const [userType, setUserType] = useState("");
    return (
        <div id="auth" className="flex flex-col md:flex-row w-full h-full bg-red-100">
            <div id="leftpane" className="md:w-[40%] w-full md:h-full h-[200px] flex md:flex-col bg-accent items-center justify-around">
                <div id="authImage" className='bg-green-200 w-[200px] h-[150px]'>
                    <img src="./assets/Donorday.png" alt="Donor's Day" />
                </div>
                <div id="quote" className='md:w-[300px] md:h-[100px] w-[150px] h-[120px]  md:text-xl md:p-5 text-center pt-3 bg-background rounded-xl text-text1'>
                    “Donating whole blood takes only about 10-15 minutes.”
                </div>
            </div>
            <div id="rightpane" className='flex flex-col items-center flex-1 justify-center gap-16'>
                    <div id='heading' className='flex flex-col w-[300px] items-center gap-7'>
                        <h1 className='text-text2 text-4xl font-bold'>Login / Sign Up</h1>
                        <span className='text-blue-500 text-lg font-semibold'>as</span>
                    </div>
                    <div id="auth-buttons" className='flex flex-col  w-[300px] gap-10 items-center'>
                        <button id="user" className='bg-button w-48 h-12 rounded-full text-text1'>User</button>
                        <button id="Organization" className='bg-button w-48 h-12 rounded-full text-text1'>Organization</button>
                        <button id="Blood Bank" className='bg-button w-48 h-12 rounded-full text-text1'>Blood Bank</button>
                    </div>
                    <img src="./assets/cells.png" alt="cells" />
                </div>
        </div>
    )
}