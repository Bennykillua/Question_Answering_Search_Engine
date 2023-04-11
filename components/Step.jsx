import React from 'react'

export default function Step({ step, stepNumber, children }) {
  return (
    <article className="flex items-center gap-[18px] mb-10">
      <button
        className={` w-10 h-10 text-[16px] text-white dark:text-white transition-all duration-300 ease-in font-bold bg-transparent p-1 rounded-full border-4 border-gray-200 ${
          step === stepNumber && 'bg-gray-700 border-green-400  text-gray-100'
        }`}
      >
        {stepNumber}
      </button>
      <div>
        <p className="font-bold font-inter text-[13px] text-gray-300 dark:text-gray-300">
          STEP {stepNumber}
        </p>
        <h2 className="font-bold font-inter text-[18px] text-gray-100 dark:text-gray-100">
          {children.toUpperCase()}
        </h2>
      </div>
    </article>
  )
}
