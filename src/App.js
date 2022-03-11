import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState(
    [
      {id: 1,
      text: 'Hello1',
      date: '1March',
      reminder: true,
      },
      {id: 2,
      text: 'Hello2',
      date: '2March',
      reminder: true,
      },
      {id: 3,
      text: 'Hello3',
      date: '3March',
      reminder: false,
      }
    
    ]
  )


  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks,  newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  } 

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
      : ('No Tasks.')}
    </div>
  );
}

export default App;
