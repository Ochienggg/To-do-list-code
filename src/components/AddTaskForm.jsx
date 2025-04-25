import { useState } from 'react'

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title)
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button
        type="submit"
        className="add-button"
        
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </form>
  )
}

export default AddTaskForm