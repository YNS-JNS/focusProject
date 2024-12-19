import React, { useState } from 'react'
import TaskList from './TaskList'
import FormTask from './FormTask'
import useFetch from '../hooks/useFetch';

const Todo = () => {

    const { data, error, isLoading } = useFetch("https://fakestoreapi.com/products/1");

    console.log("Inside Todo: isLoading", isLoading);
    console.log("Inside Todo: Data: ", data);
    console.log("Inside Todo: Error: ", error);

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Read a new book 📚', isCompleted: false },
        { id: 2, title: 'Morning meditation 🧘‍♂️', isCompleted: true },
        { id: 3, title: 'Complete React project 🚀', isCompleted: false },
        { id: 4, title: 'Plan weekend trip 🏕️', isCompleted: true },
        { id: 5, title: 'Call family 👨‍👩‍👧‍👦', isCompleted: false },
        { id: 6, title: 'Learn a new recipe 🍳', isCompleted: true },
        { id: 7, title: 'Workout session 💪', isCompleted: false },
    ]);



    const handleAddTask = (newTaskTitle) => {
        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            completed: false,
        };

        setTasks([newTask, ...tasks]);
    }

    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            })
        );
    }

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const handleEditTask = (id, newTitle) => {
        setTasks(tasks.map((task) => {
            return task.id === id ? { ...task, title: newTitle } : task
        }))
    }

    return (
        <section
            className="bg-slate-50 mt-10 w-[28rem] min-h-[550px] rounded-lg px-6 py-6 shadow-lg shadow-gray-300"
        // className="bg-slate-50 mt-20 w-[28rem] h-[30rem] rounded-lg px-6 py-6 shadow-lg shadow-gray-300 overflow-y-hidden"
        >
            {/* Title & Inputs */}
            <h1 className="text-slate-950 font-bold text-3xl text-center mb-4">F⚡st Tracker</h1>
            <FormTask handleAddTask={handleAddTask} />
            {/* Task List */}
            <TaskList tasks={tasks} toggleComplete={handleToggleComplete} removeTask={handleRemoveTask} editTask={handleEditTask} />
        </section>
    )
}

export default Todo