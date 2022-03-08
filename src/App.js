import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
