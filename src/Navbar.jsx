import Avatar from "./Avatar"

export default function Navbar({setNavbar}) {
    const user = {
        name: "Gautam Anand",
        photo: "url"
    }
    return (
        <div className="w-full h-[calc(100%-3rem)] lg:h-full absolute lg:static top-12 left-0 lg:col-span-1 lg:w-[250px] bg-black/15" onClick={() => {setNavbar(false)}}>
            <div id="navbar-part" className="w-[250px] h-full  bg-[#FF9090] p-3 flex flex-col gap-10" onClick={(e) => e.stopPropagation()}>
                <div id="profile" className="w-full h-20 flex flex-row bg-white/40 rounded-xl items-center justify-around ">
                    <Avatar />
                    <div id="name" className="text-xl font-semibold gap-5">{user.name}</div>
                </div>
                <div id="buttons" className="flex flex-col gap-7">
                    <button className="bg-accent w-full h-10 rounded-full">Profile</button>
                    <button className="bg-accent w-full h-10 rounded-full">Settings</button>
                    <button className="bg-accent w-full h-10 rounded-full">Log Out</button>
                </div>
                <button className="self-end bottom-5 bg-accent w-full h-10 rounded-full">About</button>
            </div>
        </div>
    )
}