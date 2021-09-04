import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from "react" ;
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask ] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appoinment',
        day: 'Feb 2nd at 5:40pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Web Development Assignment',
        day: 'March 22nd at 2:30pm',
        reminder: true,   
    },
    {
        id: 3,
        text: 'Event to Attend',
        day: 'Feb 12th at 12:00pm',
        reminder: false,
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 ) + 1
    const newTask = {id , ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title = "Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Tasks to display' }
    </div>
  );
}

export default App;
