import { CirclePlus } from 'lucide-react'
import { useState } from 'react';

const FormTask = ({ handleAddTask }) => {

    const [tasks, setTasks] = useState({ title: '' });

    const handleChange = (e) => {
        setTasks({ ...tasks, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tasks.title.trim()) return; // Prevent empty task titles
        const title = tasks.title.trim();
        handleAddTask(title);
        setTasks({ title: '' });
    }


    return (
        <form className="flex items-center bg-gray-200 rounded-full my-4 p-2 shadow-md"
            onSubmit={handleSubmit}
        >
            {/* Input */}
            <input
                type="text"
                name="title"
                autoComplete="off"
                required
                placeholder="Add your task here..."
                className="border-0 outline-none flex-1 h-14 pl-6 pr-4 bg-transparent placeholder:text-slate-600 text-lg"
                value={tasks.title}
                onChange={handleChange}
            />
            {/* Button */}
            <button type="button"
                onClick={handleSubmit}
                className="flex justify-center items-center border-none rounded-full bg-green-600 hover:bg-green-500 w-14 h-14 text-white text-lg font-medium cursor-pointer">
                <CirclePlus className="h-7 w-7" />
            </button>
        </form>
    )
}

export default FormTask