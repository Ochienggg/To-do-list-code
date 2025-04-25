import { useState, useEffect } from 'react'

import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'



function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)



  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        setTasks(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch tasks')
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])




  const addTask = async (title) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
        userId: 1
      })
      setTasks([response.data, ...tasks])
    } catch (err) {
      setError('Failed to add task')
    }
  }



  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (err) {
      setError('Failed to delete task')
    }
  }





  
  return (
    <div className="app-container">
      <div className="task-app">
        <h1 className="app-title">Task Tracker App</h1>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  )
}

export default App

