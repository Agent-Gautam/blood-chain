import { RxAvatar } from "react-icons/rx";
import { IoMdOpen } from "react-icons/io";

export default function ClassElement({data}) {
    return (
        <div className="relative bg-black/50 w-full sm:w-[250px] h-[200px] rounded-lg">
            <div id="up" className="flex flex-row w-full h-20 bg-blue-300 p-5 items-center gap-5">
                <RxAvatar size={40} />
                <h1 className="text-xl">{data.name}</h1>
            </div>
            <div id="down" className="p-5">
                <h2 id="teacher" className="text-text1">{data.teacher}</h2>
            </div>
            <div id="open" className="absolute bottom-3 right-3 text-text1">
                <IoMdOpen size={20} />
            </div>
        </div>
    )
}