import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTasks from "./components/AddTasks"

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Test 1",
        day: "Feb 6th at 1.30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Test 2",
        day: "Feb 7th at 1.30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Test 3",
        day: "Feb 5th at 2.30pm",
        reminder: false,
    },
  ])

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/>
      ) : (
        "No Tasks To Show"
      )}
    </div> 
  )
}

export default App;
