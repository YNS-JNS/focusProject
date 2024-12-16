import React from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {

    const tasks = [
        { id: 1, title: 'Go Gym 🦾', completed: false },
        { id: 2, title: 'Play football ⚽', completed: true },
        { id: 3, title: 'Do homework 🧠', completed: false },
    ]

  return (
    <div className='mt-10'>
        {
            tasks.map(task => (
               <TaskItem key={task.id} task={task} />
            ))
        }
    </div>
  )
}

export default TaskList