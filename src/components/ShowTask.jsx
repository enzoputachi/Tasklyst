
const ShowTask = ({taskList, setTaskList, task, setTask}) => {

  const handleReset = () => {
    setTaskList([])
  }

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter(todo => todo.id !== id);
    setTaskList(updatedTaskList)
  }

  const handleEdit = (id) => {
    const selectedTask = taskList.find(todo => todo.id === id);
    console.log(selectedTask);
    setTask(selectedTask) 
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={handleReset}>Clear All</button>
      </div>

      <ul>
        {taskList.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShowTask
