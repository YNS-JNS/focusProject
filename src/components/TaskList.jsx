import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleComplete, removeTask, editTask }) => {

  return (
    <div className='mt-10'>
      {
        tasks ? (tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} removeTask={removeTask} editTask={editTask} />
        ))) : (
          <h3 className='text-center text-gray-600'>No tasks available.</h3>
        )
      }
    </div>
  )
}

export default TaskList