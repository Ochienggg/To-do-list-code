function TaskItem({ task, onDelete }) {
    return (
      <li className="todo-item">
        <div className="todo-content">
          <input
            type="checkbox"
            checked={task.completed}
            readOnly
            className="task-checkbox"
          />
          <span className={task.completed ? 'task-title completed' : 'task-title'}>
            {task.title}
          </span>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="delete-button"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
    )
  }
  
  export default TaskItem