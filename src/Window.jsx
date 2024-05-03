export default function Window({navbar}) {
    return (
        <div className={`flex-1 w-full h-full p-12 flex flex-col gap-10 ${navbar && ""}`}>
            <h1 className="text-3xl text-accent font-bold">Welcome, User!</h1>
            <p className="w-[80%] font-semibold text-lg">Give the gift of life. Donate blood and help save lives, or request blood for those in need. Together, we can make a meaningful difference.</p>
            <div id="actionButton" className="flex flex-row items-center gap-10">
                <button className="md:w-[300px] w-36 md:h-24 h-16 md:text-xl text-lg font-semibold rounded-xl bg-[#FF4747] text-white">Request Blood</button>
                <button className="md:w-[300px] w-36 md:h-24 h-16 bg-[#4CB3FE] text-white md:text-xl text-lg font-semibold rounded-xl">Donate Blood</button>
            </div>
            <p className="text-lg font-semibold">Participate in the ongoing blood donation camps to save lives!</p>
            <div id="events" className="w-full h-[200px] bg-black/40 flex flex-row items-center justify-evenly overflow-x-auto gap-10 snap-x">
                <div className="w-[280px] h-[150px] bg-white">event1</div>
                <div className="w-[280px] h-[150px] bg-white">event1</div>
                <div className="w-[280px] h-[150px] bg-white">event1</div>
                <div className="w-[280px] h-[150px] bg-white">event1</div>
            </div>
        </div>
    )
}