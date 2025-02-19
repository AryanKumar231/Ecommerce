import React from 'react'
import { IoReload } from "react-icons/io5";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="grid place-items-center h-screen ">
            <div className='text-center p-4'>
                <h2 className="text-red-500 mb-2">Something went wrong!</h2>
                <p className="text-neutral-700 text-xl">{error.message}</p>
                <button onClick={resetErrorBoundary} className="cursor-pointer bg-transparent p-2 mt-2 flex gap-2 items-center mx-auto">
                    <IoReload /> Try Again
                </button>
            </div>
        </div>
    )
}

export default ErrorFallback;