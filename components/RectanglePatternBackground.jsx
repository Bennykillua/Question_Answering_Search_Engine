import React from 'react'

export default function RectanglePatternBackground({ opacity }) {
  return (
    <div className="relative  isolate -z-10">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg
          className={`h-[60rem] ${
            opacity === 'hero' ? 'w-[60rem] ' : 'w-[100rem]'
          } flex-none stroke-gray-900 dark:stroke-sky-400 opacity-[0.14] ${
            opacity === 'hero' ? 'dark:opacity-[0.3]' : 'dark:opacity-[0.6]'
          }`}
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width="200"
              height="200"
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
          ></rect>
        </svg>
      </div>
    </div>
  )
}
