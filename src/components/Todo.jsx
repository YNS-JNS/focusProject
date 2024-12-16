import React from 'react'
import TaskList from './TaskList'
import FormTask from './FormTask'

const Todo = () => {
    return (
        <section className="bg-slate-50 w-[26rem] min-h-[28rem] rounded-lg px-6 py-6 shadow-lg shadow-gray-300">
            {/* Title & Inputs */}
            <h1 className="text-slate-950 font-bold text-3xl text-center mb-4">F⚡st Tracker</h1>
            <FormTask />

            {/* Task List */}
            <TaskList />
        </section>
    )
}

export default Todo