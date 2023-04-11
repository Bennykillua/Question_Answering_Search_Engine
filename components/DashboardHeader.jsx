import React from 'react'
import ThemeChanger from './ThemeChanger'
import Avatar from './Avatar'

const DashboardHeader = ({ username }) => {
  return (
    <div className=" border-2 border-blue-400 flex justify-between items-center px-4 h-[80px] rounded-md ">
      <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 font-urbanist">
        {' '}
        Welcome Back ,
        <span className="text-blue-600 dark:text-blue-400 pl-1">
          @{username}{' '}
        </span>
      </p>
      <div className="flex space-x-8 items-center  rounded-md p-2">
        <ThemeChanger />
        <Avatar username={username} />
      </div>
    </div>
  )
}

export default DashboardHeader
