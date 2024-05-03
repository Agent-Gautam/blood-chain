import { useState } from "react";

export default function EditWork({ edit, setEdit, homeworks }) {
    const [homework, setHomework] = useState(homeworks);

    function handleChange(e, id) {
        const { name, value } = e.target;
        const updatedHomework = homework.map((h, i) =>
            i === id ? { ...h, [name]: value } : h
        );
        setHomework(updatedHomework);
    }

    function handleSave() {
        // Handle save logic here
        // For now, just log the updated homework
        console.log("Updated Homework:", homework);
        // You can also call setEdit(false) if you want to close the edit mode after saving
    }

    return (
        <div className='absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center' onClick={() => { setEdit(false) }}>
            <div className="w-[300px] h-[400px] bg-white p-5" onClick={(e) => e.stopPropagation()}>
                <h1>Edit </h1>
                {homework.map((data, id) =>
                    <div id="inputs" key={id} className="flex flex-row ">
                        <input type="text" name="subject" value={data.subject} onChange={(e) => handleChange(e, id)} />
                        <input type="text" name="title" value={data.title} onChange={(e) => handleChange(e, id)} />
                    </div>
                )}
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
