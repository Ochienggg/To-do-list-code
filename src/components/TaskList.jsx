import TaskItem from './TaskItem'

function TaskList({ tasks, onDelete }) {
  return (
    <ul className="todo-list">
        {tasks.map((task) => (
  <TaskItem key={task.id} task={task} onDelete={onDelete} />
))}

  
    </ul>
  )
}

export default TaskList