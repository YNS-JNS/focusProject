import { CirclePlus } from 'lucide-react'
import React from 'react'

const FormTask = () => {
    return (
        <form className="flex items-center bg-gray-200 rounded-full my-4 p-2 shadow-md">
            {/* Input */}
            <input
                type="text"
                placeholder="Add your task here..."
                className="border-0 outline-none flex-1 h-14 pl-6 pr-4 bg-transparent placeholder:text-slate-600 text-lg"
            />
            {/* Button */}
            <button type="button"
                className="flex justify-center items-center border-none rounded-full bg-green-600 hover:bg-green-500 w-14 h-14 text-white text-lg font-medium cursor-pointer">
                <CirclePlus className="h-7 w-7" />
            </button>
        </form>
    )
}

export default FormTask