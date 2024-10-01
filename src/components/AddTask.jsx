
const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();    


    if (task.id) {

      const updatedTask = taskList.map((todo) => (todo.id === task.id 
        ? {
            id: task.id,
            name: task.name,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
          }
        : todo
      ));

      setTaskList(updatedTask);
      setTask({})      
    } else {

      const newTask = {
        id: Math.floor(Math.random() * 10000),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      
      if (e.target.task.value) {
        setTaskList([...taskList, newTask])
        setTask({})
      }
    }
  }

  

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}> 
        <input 
          type="text"
          name="task"
          value={task.name || ""}
          placeholder="Add Task"
          maxLength={25}
          onChange={(e) => setTask({...task, name: e.target.value})}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}

export default AddTask
