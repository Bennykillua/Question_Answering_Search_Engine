import React from 'react'

export default function ProductReviewsTableHead() {
  return (
    <div>
      <div className="flex  items-center space-x-5  pl-4 pr-0 py-2 bg-gray-500/50 dark:bg-blue-500/30 rounded-md w-full h-[70px]  ring-2 ring-gray-500 dark:ring-gray-100">
        <p className="text-md font-urbanist font-extrabold text-gray-800  dark:text-gray-100">
          Id
        </p>
        <div className="flex items-center space-x-6  w-full  py-4 ">
          <div className="flex items-center justify-center min-w-[120px] ">
            <p className="text-md font-urbanist font-extrabold text-center text-gray-800  dark:text-gray-100 ">
              Customer Name
            </p>
          </div>
          <div className="flex items-center justify-center min-w-[200px]  ">
            <p className="text-md font-urbanist font-extrabold text-center text-gray-800  dark:text-gray-100">
              Customer Email
            </p>
          </div>
          <div className="flex items-center justify-center  min-w-[160px] ">
            <p className="text-md font-urbanist font-extrabold text-center text-gray-800  dark:text-gray-100">
              Product Name
            </p>
          </div>
          <div className="flex items-center justify-center min-w-[140px]  ">
            <p className="text-md font-urbanist font-extrabold text-center text-gray-800  dark:text-gray-100">
              Product Type
            </p>
          </div>
          <div className="flex items-center justify-center w-[300px] ">
            <span className="text-md font-urbanist text-center font-extrabold text-gray-800  dark:text-gray-100 ">
              Customer Reviews
            </span>
          </div>
          <div className="flex items-center justify-center  min-w-[90px] text-gray-800  dark:text-gray-100 ">
            <span className="text-md font-urbanist font-extrabold text-center px-3 py-0.5 rounded-[4px]">
              Sentiments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
