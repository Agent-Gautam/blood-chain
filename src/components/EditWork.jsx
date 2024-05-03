import { useState } from "react"

export default function EditWork({edit, setEdit, homeworks}) {
    const [homework, setHomework] = useState([]);

    return (
        <div className='absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center'>
                <div className="w-[300px] h-[400px] bg-white p-5">
                     {homeworks.map((data,id) => {
                        <div id="inputs" key={id}>
                            <input type="text" name="subject" value={data.subject} />
                            <input type="text" name="title" value={data.title} />
                        </div>
                     })}
                </div>
            </div>
    )
}