
type DataPropsType = {
    title: string,
    tasks: Array<TaskPropsType>,
    students: Array<string>
}

type TaskPropsType = {
    taskId: number,
    title: string,
    isDone: boolean
}

export const Tasks = ({title, tasks, students}: DataPropsType) => {
    return (
        <>
            <h1>{title}</h1>
            {tasks.map(task => {
                return (
                    <ul>
                        <li>{task.title}</li>
                        <li>{task.isDone}</li>
                    </ul>
                )
            })}
            <h3>Students</h3>
            <ul>
                {students.map(stName => <li>{stName}</li>)}
            </ul>
        </>
    )
}
