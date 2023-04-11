import React from 'react'
import {  StarIcon } from '@heroicons/react/solid'


export default function BrandLogo({ size }) {
  return (
    <div
      className={`relative ${
        size === 'L'
          ? 'w-[65px] h-[65px]'
          : size === 'M'
          ? 'w-[44px] h-[44px]'
          : 'w-[30px] h-[30px]'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" text-gray-900 dark:text-gray-100"
      >
        <path
          fillRule="evenodd"
          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
          clipRule="evenodd"
        />
      </svg>

      <div
        className={`absolute ${
          size === 'L'
            ? 'top-[15px] left-[19px]'
            : size === 'M'
            ? 'top-[10px] left-[12.5px]'
            : 'top-[5.3px] left-[7.6px]'
        }`}
      >
        <StarIcon
          className={` ${
            size === 'L'
              ? 'w-[26px] h-[26px]'
              : size === 'M'
              ? 'w-[19px] h-[19px]'
              : 'w-[14px] h-[14px]'
          } text-white dark:text-blue-500`}
        />
       
      </div>
    </div>
  )
}
