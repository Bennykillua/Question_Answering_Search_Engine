import React from 'react'

const avatarClasses = {
  container:
    'flex items-center justify-center rounded-full w-[57px] h-[57px] bg-blue-600 dark:bg-blue-400',
  circleBox:
    'flex capitalize font-inter font-semibold text-blue-600 dark:text-blue-200 text-3xl w-[49px] h-[49px] justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-full',
  image:
    'bg-gray-900 rounded-full w-[49px] h-[49px]  cursor-pointer hover:opacity-75',
  box: 'flex items-center space-x-4 rounded-lg',
  box__extra:
    'flex items-center space-x-4 rounded-lg  ring-4 ring-blue-600  dark:ring-blue-500 py-[2px] px-2 bg-blue-300/50 dark:bg-blue-700/50',
  box__div__p1:
    'font-inter font-bold capitalize text-md  text-blue-600 dark:text-blue-400 ',
}

const Avatar = ({ username }) => {
  return (
    <div className={avatarClasses.box}>
      <div className={avatarClasses.container}>
        <div className={avatarClasses.circleBox}>
          <span>
            <p className={avatarClasses.box__div__p1}>
              {username?.substring(0, 1)}
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Avatar
