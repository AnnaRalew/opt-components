import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import { v1 } from 'uuid';



export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
                                         { id: v1(), title: "HTML&CSS", isDone: true },
                                         { id: v1(), title: "JS", isDone: true },
                                         { id: v1(), title: "ReactJS", isDone: false },
                                         { id: v1(), title: "Rest API", isDone: false },
                                         { id: v1(), title: "GraphQL", isDone: false },
                                     ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = { id: v1(), title: title, isDone: false };
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }



    let [filter, setFilter] = useState<FilterValuesType>("all");

    const filteredTasks = () => {
            switch (filter){
                case "active":
                    return tasks.filter(t => !t.isDone)
                case "completed":
                    return tasks.filter(t => t.isDone)
                default:
                    return tasks
            }

    }
    let tasksForTodolist = filteredTasks();


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }



    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask} />
        </div>
    );
}

export default App;






//------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// function App() {
//
//     let [tasks, setTasks] = useState([
//         {id: v1(), title: "HTML&CSS", isDone: true},
//         {id: v1(), title: "JS", isDone: true},
//         {id: v1(), title: "ReactJS", isDone: false},
//         {id: v1(), title: "Rest API", isDone: false},
//         {id: v1(), title: "GraphQL", isDone: false},
//     ]);
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//
//     function removeTask(id: string) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     function addTask(title: string) {
//         let task = {id: v1(), title: title, isDone: false};
//         let newTasks = [task, ...tasks];
//         setTasks(newTasks);
//     }
//
//     function changeStatus(taskId: string, isDone: boolean) {
//         let task = tasks.find(t => t.id === taskId);
//         if (task) {
//             task.isDone = isDone;
//         }
//
//         setTasks([...tasks]);
//     }
//
//
//     const filteredTasks=()=>{
//         // let tasksForTodolist = tasks;
//         //
//         // if (filter === "active") {
//         //  return   tasksForTodolist = tasks.filter(t => !t.isDone);
//         // }
//         // if (filter === "completed") {
//         //   return  tasksForTodolist = tasks.filter(t => t.isDone);
//         // }
//         // return tasksForTodolist
//
//         let tasksForTodolist = tasks;
//         switch (filter) {
//             case 'active': {
//                 return   tasksForTodolist = tasks.filter(t => !t.isDone);
//             }
//             case 'completed': {
//                 return  tasksForTodolist = tasks.filter(t => t.isDone);
//             }
//             default:return tasksForTodolist
//         }
//     }
//
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//
//     return (
//         <div className="App">
//             <Todolist title="What to learn"
//                       tasks={filteredTasks()}
//                       removeTask={removeTask}
//                       changeFilter={changeFilter}
//                       addTask={addTask}
//                       />
//         </div>
//     );
// }
//
// export default App;








//----------------------------------------------------------------------------


// export type FilterValuesType = "all" | "active" | "completed";
// function App() {
//
//     let [tasks, setTasks] = useState([
//                                          { id: v1(), title: "HTML&CSS", isDone: true },
//                                          { id: v1(), title: "JS", isDone: true },
//                                          { id: v1(), title: "ReactJS", isDone: false },
//                                          { id: v1(), title: "Rest API", isDone: false },
//                                          { id: v1(), title: "GraphQL", isDone: false },
//                                      ]);
//
//     function removeTask(id: string) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     function addTask(title: string) {
//         let task = { id: v1(), title: title, isDone: false };
//         let newTasks = [task, ...tasks];
//         setTasks(newTasks);
//     }
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = tasks;
//
//     if (filter === "active") {
//         tasksForTodolist = tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//
//
//     return (
//         <div className="App">
//             <Todolist2 title="What to learn"
//                        tasks={tasksForTodolist}
//                        removeTask={removeTask}
//                        changeFilter={changeFilter}
//                        addTask={addTask} />
//             <div>
//                 <div>Many interesting information</div>
//             </div>
//         </div>
//     );
// }
//
// export default App;




// -------------------------------------------------------------------------------

// function App() {
//
//     let [tasks, setTasks] = useState([
//                                          {id: 1, title: "HTML&CSS", isDone: true},
//                                          {id: 2, title: "JS", isDone: true},
//                                          {id: 3, title: "ReactJS", isDone: false},
//                                          {id: 4, title: "Rest API", isDone: false},
//                                          {id: 5, title: "GraphQL", isDone: false},
//                                      ]);
//
//     function removeTask(id: number) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     function deleteAllTasks() {
//         setTasks([])
//     }
//
//
//
//     return (
//         <div className="App">
//             <Todolist1 title="What to learn"
//                        tasks={tasks}
//                        removeTask={removeTask}
//                        deleteAllTasks={deleteAllTasks}
//             />
//         </div>
//     );
// }
//
// export default App;


//-------------------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist1} from './Todolist1';
//
//
// export type FilterValuesType = "all" | "active" | "completed" | "three";
//
// function App() {
//
//     let [tasks, setTasks] = useState([
//         {id: 1, title: "HTML&CSS", isDone: true},
//         {id: 2, title: "JS", isDone: true},
//         {id: 3, title: "ReactJS", isDone: false},
//         {id: 4, title: "Rest API", isDone: false},
//         {id: 5, title: "GraphQL", isDone: false},
//     ]);
//
//     const deleteAllTasks = () => {
//         setTasks([])
//     }
//
//     function removeTask(id: number) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     // let [filter, setFilter] = useState<FilterValuesType>("all");
//     //
//     // let tasksForTodolist = tasks;
//     //
//     // if (filter === "active") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === false);
//     // }
//     // if (filter === "completed") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === true);
//     // }
//     //
//     // function changeFilter(value: FilterValuesType) {
//     //     setFilter(value);
//     // }
//
//     return (
//         <div className="App">
//             <Todolist1
//                 title="What to learn"
//                 tasks={tasks}
//                 removeTask={removeTask}
//                 //changeFilter={changeFilter}
//                 deleteAllTasks={deleteAllTasks}
//
//             />
//         </div>
//     );
// }
//
// export default App;