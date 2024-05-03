import { useState } from "react"

export default function AddWork({setAdd}) {
    const [newHomework, setNewHomeWork] = useState({subject: "", title: ""});
    function handleChange(e) {
        const {name, value} = e.target;
        setNewHomeWork({...newHomework, [name] : value});
    }

    function handleSave() {
        console.log("save");
    }

    return (
        <div className='absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center' onClick={() => { setAdd(false) }}>
            <div className="w-[300px] h-[400px] bg-white p-5" onClick={(e) => e.stopPropagation()}>
                <h1>Add homework</h1>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" value={newHomework.subject} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={newHomework.title} onChange={handleChange} />
                </div>
                <button className="w-20 h-10 rounded-xl bg-blue-200" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}