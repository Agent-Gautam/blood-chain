import ClassElement from "./ClassElement"


export default function Dashboard({}) {
    let classes = [
        {
            name: 'B.Tech CSE',
            teacher: 'Navneet Kaur',
            homework: {
                'science': "hello ",
                'math': "cha 1"
            },
            assignment: [
                '7827323892',
                '3878734793'
            ]
        },
        {
            name: 'B.Tech CSE',
            teacher: 'Navneet Kaur',
            homework: {
                'science': "hello ",
                'math': "cha 1"
            },
            assignment: [
                '7827323892',
                '3878734793'
            ]
        }
    ]
    return (
        <div className="w-full h-[90%] flex flex-col sm:flex-row flex-wrap p-10 gap-10 sm:justify-center" >
            {classes.map((c, id) => <ClassElement data={c} key={id} />)}
        </div>
    )
}
