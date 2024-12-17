import React, { useState } from 'react'
import TaskList from './TaskList'
import FormTask from './FormTask'

const Todo = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Go To Gym 🦾', isCompleted: false },
        { id: 2, title: 'Cooking a healthy dinner 🥗🧃', isCompleted: true },
        { id: 3, title: 'Do Homework 🧠📖', isCompleted: false },
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

    console.log('Task object: ', tasks);

    return (
        <section className="bg-slate-50 w-[28rem] min-h-[29rem] rounded-lg px-6 py-6 shadow-lg shadow-gray-300">
            {/* Title & Inputs */}
            <h1 className="text-slate-950 font-bold text-3xl text-center mb-4">F⚡st Tracker</h1>
            <FormTask handleAddTask={handleAddTask} />
            {/* Task List */}
            <TaskList tasks={tasks} toggleComplete={handleToggleComplete} removeTask={handleRemoveTask} editTask={handleEditTask} />
        </section>
    )
}

export default Todo