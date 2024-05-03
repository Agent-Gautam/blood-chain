export default function Class() {
    const classo = {
        name: 'B.Tech CSE',
        teacher: 'Navneet Kaur',
        homework: {
            'science': "hello ",
            'math': "cha 1"
        },
        assignment: [
            {
                subject: "math",
                title: "classwork questions"
            },
            {
                subject: "math",
                title: "classwork questions"
            }
        ]
    }
    return (
        <div className="w-full h-full p-10">
            <h1 className="text-xl font-bold text-text2">{classo.name}</h1>
            <div id="homework">
                <h2>Today's Homework</h2>
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Homework</th>
                    </tr>
                </table>
            </div>
            <div id="assingments">
                <h2>Assignments</h2>
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Assignment</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}