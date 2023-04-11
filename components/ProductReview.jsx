import React from 'react'

export default function ProductReview({ productReview, handleChange }) {
  return (
    <>
      <h1 className="text-gray-900  text-[43px] font-bold">
        Your Feedback/Review
      </h1>
      <fieldset className="border-none">
        <legend className="font-medium text-md text-gray-400">
          Please provide your feedback.
        </legend>
        <label
          htmlFor="customerReview"
          className="flex flex-col space-y-1.5 mb-8 text-md text-gray-900 font-semibold mt-8"
        >
          {' '}
          <div className="flex justify-between">
            <span>Your Feedback</span>
          </div>
          <textarea
            className="border-2 w-[560px] h-[120px] p-x-4 py-4 rounded-lg bg-gray-50 border-gray-200 text-md text-gray-900 font-semibold placeholder:text-gray-400 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={productReview.customerReview}
            onChange={(e) => handleChange(e)}
            placeholder="your review"
            id="customerReview"
            name="customerReview"
            rows={20}
            cols={50}
          />
        </label>
        <label
          htmlFor="ratings"
          className="flex flex-col space-y-1.5 mb-8 text-md text-gray-900 font-semibold mt-6"
        >
          {' '}
          <div className="flex justify-between">
            <span>Product Name </span>
          </div>
          <input
            className="border-2 w-[560px] h-[64px] p-x-4 py-4 rounded-lg bg-gray-50 border-gray-200 text-md text-gray-900 font-semibold placeholder:text-gray-400 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={productReview.ratings}
            onChange={(e) => handleChange(e)}
            placeholder="eg. 4.1, 3.2"
            id="ratings"
            name="ratings"
            maxLength={32}
          />
        </label>
      </fieldset>
    </>
  )
}
