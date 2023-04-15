import React from 'react'

function StatCard({title,data}) {
    return (
        <div className={` group ${title === 'Positive' ? ' hover:bg-green-200 dark:hover:bg-green-200 bg-gray-200  dark:bg-white/10 ' : title === 'Negative' ? 'hover:bg-rose-200 dark:hover:bg-rose-200 bg-gray-200  dark:bg-white/10' : title === 'Neutral' ? 'hover:bg-amber-200 dark:hover:bg-amber-200 bg-gray-200  dark:bg-white/10' : 'hover:bg-blue-200 dark:hover:bg-blue-200 bg-gray-200  dark:bg-white/10'} h-full w-full flex flex-col space-y-3 justify-center px-6 py-2  rounded-xl shadow-lg dark:backdrop-blur-xl`}>
            
            <p className={`${title === 'Positive' ? ' text-green-400 dark:text-green-500 font-extrabold ' : title === 'Negative' ? 'text-rose-500 dark:text-rose-500 font-extrabold' : title === 'Neutral' ? 'text-yellow-500 dark:text-amber-500 font-extrabold' : 'text-blue-500 font-extrabold'}  font-manrope text-5xl `}>
                {data}
            </p>

            <h3 className="group-hover:text-gray-600 font-semibold font-inter text-xl text-gray-500 dark:text-gray-100">
                {title}
            </h3>
        </div>
    )
}

export default StatCard