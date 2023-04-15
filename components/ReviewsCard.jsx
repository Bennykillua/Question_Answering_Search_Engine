import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

function ReviewsCard({
  index,
  createdAt,
  name,
  emailId,
  productName,
  productType,
  customerReviews,
  ratings,
  sentiments
}) {

const date = new Date(createdAt)
const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`

  return (
    <div className="relative grid grid-cols-12 gap-x-1 gap-y-1 bg-gradient-to-br from-blue-50 to-blue-400/50 dark:bg-gradient-to-br dark:from-gray-100/10 dark:to-gray-200/20 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in mx-auto  w-full h-[250px] px-3 py-2 cursor-pointer ">
      {/* Left Side */}
      <div className="absolute w-[28px] h-[28px] rounded-md bg-blue-600 dark:bg-blue-200 top-5 left-6">
        <span className="flex items-center justify-center text-blue-100 dark:text-blue-600 font-bold font-inter text-lg ">
          {index+1}
        </span>
      </div>
      <div className="col-span-3 w-full h-full  rounded-md ">
        <div className="flex flex-col items-center justify-center h-full w-full px-2  space-y-1.5 ">
          <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full border-8 border-blue-400 dark:border-gray-200 hover:border-blue-500 dark:hover:border-blue-500 transition duration-150 ease-in-out">
            <p className="font-inter font-bold capitalize text-5xl  text-blue-600 dark:text-blue-200 ">
              {name?.substring(0, 1)}
            </p>
          </div>

          <p className="capitalize my-1 text-md font-semibold font-inter text-gray-600 dark:text-gray-100">
           {name}
          </p>

          <div className="flex items-center  rounded-lg  text-blue-500 dark:text-blue-300 text-sm font-bold font-inter">
            {emailId}
          </div>
        </div>
      </div>
      {/* Right Side  */}
      <div className="flex flex-col justify-center space-y-6 col-span-9 w-full h-full rounded-md px-12 py-4">
        <div className=" flex  items-end  space-x-2 ">
          <p className="flex text-gray-900 dark:text-gray-100 font-manrope text-lg">
            {Array(parseInt(ratings))
              .fill()
              .map((_, i) => (
                <StarIcon className="h-5 text-yellow-500" key={i} />
              ))}
          </p>
          <span className=" text-gray-900 dark:text-gray-100 font-extrabold font-manrope text-xs  ">
            {formattedDate}
          </span>
        </div>
        <div className="flex  max-w-[550px]">
          <span className="text-md font-urbanist font-semibold text-gray-800  dark:text-gray-100">
            {customerReviews}
          </span>
        </div>

        <div className="flex  justify-between items-center ">
          <div className="flex flex-col space-y-1.5  ">
            <p className=" capitalize text-sm font-urbanist font-semibold text-gray-500  dark:text-gray-100">
              Product Name
            </p>
            <span className="bg-blue-300 dark:bg-blue-700 hover:bg-blue-700 hover:text-gray-300 hover:dark:text-blue-600 hover:dark:bg-blue-300  px-4 py-1 rounded-[4px] capitalize text-sm font-urbanist font-bold text-blue-700  dark:text-gray-100">
             {productName}
            </span>
          </div>

          <div className="flex flex-col space-y-1.5  ">
            <p className="capitalize text-sm font-urbanist font-semibold text-gray-500  dark:text-gray-100">
              Product Type
            </p>
            <span className="bg-blue-300 dark:bg-blue-700 hover:bg-blue-700 hover:text-gray-300 hover:dark:text-blue-600 hover:dark:bg-blue-300  px-4 py-1 rounded-[4px] capitalize text-sm font-urbanist font-bold text-blue-700  dark:text-gray-100">
              {productType}
            </span>
          </div>
          <div className="flex flex-col space-y-1.5  ">
            <p className="capitalize text-sm font-urbanist font-semibold text-gray-500  dark:text-gray-100">
              Sentiment
            </p>
            <div
              className={`shadow-md capitalize ${
                sentiments === 'Positive' || sentiments === 'positive'
                  ? 'bg-green-100 text-green-600 hover:bg-green-400 hover:text-green-100 hover:dark:text-green-50 hover:dark:bg-green-400'
                  : sentiments === 'Negative' || sentiments === 'negative'
                  ? 'bg-rose-100 text-rose-600 hover:bg-rose-700 hover:text-rose-100 hover:dark:text-rose-100 hover:dark:bg-rose-600 '
                  : sentiments === 'Neutral' || sentiments === 'neutral'
                  ? 'bg-yellow-100 text-amber-600 hover:bg-amber-700 hover:text-amber-300 hover:dark:text-amber-600 hover:dark:bg-amber-300 '
                  : 'bg-white text-white'
              }  text-md font-urbanist font-semibold px-4 py-0.5 rounded-[4px]`}
            >
              {sentiments}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard
