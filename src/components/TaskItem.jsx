import React from 'react'
import { Trash2 } from 'lucide-react'
import tick from '../assets/tick2.png'
import not_tick from '../assets/not_tick.png'


const TaskItem = ({ task }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer p-1'
                onClick={() => console.log('click')}
            >
                {/* Icon */}
                <img className='w-7'
                    alt='checkbox'
                    src={task.completed ? tick : not_tick}
                >
                </img>
                {/* Task title */}
                <h4 className='text-slate-700 ml-4 text-[17px] decoration-slate-500'>
                    {task.title}
                </h4>
                {/* Task description */}
                {/* <p></p> */}
            </div>
            {/* Delete button */}
            <span className='p-1'>
                <Trash2
                    className='cursor-pointer hover:text-red-600'
                />
            </span>
        </div>
    )
}

export default TaskItem