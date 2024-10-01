import { useEffect, useState } from "react"

import AddTask from "./components/AddTask"
import Header from "./components/Header"
import ShowTask from "./components/ShowTask"

import "./App.css"

const App = () => {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
  const [task, setTask] = useState({})

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="container">
      <Header />
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      /> 
      <ShowTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      /> 
    </div>
  )
}
 
export default App
