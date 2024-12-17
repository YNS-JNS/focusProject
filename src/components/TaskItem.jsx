import React, { useState } from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import tick from '../assets/tick2.png'
import not_tick from '../assets/not_tick.png'


const TaskItem = ({ task, toggleComplete, removeTask, editTask }) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleEdit = () => {
        if (newTitle.trim()) {
            editTask(task.id, newTitle.trim());
        } else {
            // Restaurer l'ancienne valeur si vide
            setNewTitle(task.title); // Restore old value if empty
        }
        setIsEditMode(false); // Quitter le mode édition
    }

    if (!task) return null;

    return (
        <div className='flex items-center my-3 gap-2'>
            {
                isEditMode ?
                    // Edit mode
                    (
                        <input
                            type="text"
                            autoComplete="off"
                            className="border-0 outline-none flex-1 h-14 pl-6 pr-4 bg-transparent placeholder:text-slate-600 text-lg"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            //  onBlur: Call a function when a user leaves an input field
                            onBlur={handleEdit} // Sauvegarde quand l'input perd le focus
                            onKeyDown={(e)=> { if(e.key === 'Enter') handleEdit() }}
                            autoFocus
                        />
                    )
                    :
                    // Norma mode
                    (
                        <>
                            <div className='flex flex-1 items-center cursor-pointer p-1'
                                onClick={() => toggleComplete(task.id)}
                            >
                                {/* Icon */}
                                <img className='w-7'
                                    alt='checkbox'
                                    src={task.isCompleted ? tick : not_tick}
                                >
                                </img>
                                {/* Task title */}
                                <h4 className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${task.isCompleted ? 'line-through' : ''} `}>
                                    {task.title}
                                </h4>
                                {/* Task description */}
                                {/* <p></p> */}
                            </div>
                        </>
                    )
            }

            {/* Delete button */}
            <span className='p-1 flex gap-2'>
                <Pencil
                    className='cursor-pointer hover:text-green-600'
                    onClick={() => setIsEditMode(true)}
                />
                <Trash2
                    className='cursor-pointer hover:text-red-600'
                    onClick={() => removeTask(task.id)}
                />
            </span>
        </div >
    )
}

export default TaskItem