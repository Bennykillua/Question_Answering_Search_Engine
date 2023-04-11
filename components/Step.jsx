
import React from 'react'

export default function Step({ step, stepNumber, children }) {
  return (
    <div className="flex items-center gap-[18px] mb-10">
      <button
        className={` step ${step == stepNumber ? ' current-step' : ''}`}
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
    </div>
  )
}
