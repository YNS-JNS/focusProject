import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleComplete, removeTask, editTask }) => {

  return (
    <div
      className='mt-10 max-h-[350px] overflow-y-auto no-scrollbar'
      // className='mt-10 max-h-[350px] overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200'
      // className='mt-10 max-h-[350px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll'

    >
      {
        tasks.length > 0 ? (tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} removeTask={removeTask} editTask={editTask} />
        ))) : (
          <h3 className='text-center text-gray-600'>No tasks available.</h3>
        )
      }
    </div>
  )
}

export default TaskList