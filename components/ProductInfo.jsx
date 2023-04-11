import React from 'react'

export default function ProductInfo({ productInfo, handleChange }) {
  return (
    <>
      <h1 className="text-gray-900  text-[43px] font-bold">Product Info</h1>
      <fieldset className="border-none">
        <legend className="font-medium text-md text-gray-400">
          Please provide the details of the product.
        </legend>
        <label
          htmlFor="productName"
          className="flex flex-col space-y-1.5 mb-8 text-md text-gray-900 font-semibold mt-8"
        >
          {' '}
          <div className="flex justify-between">
            <span>Product Name </span>
          </div>
          <input
            className="border-2 w-[560px] h-[64px] p-x-4 py-4 rounded-lg bg-gray-50 border-gray-200 text-md text-gray-900 font-semibold placeholder:text-gray-400 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={productInfo.productName}
            onChange={(e) => handleChange(e)}
            placeholder="Mackbook Air M2"
            id="productName"
            name="productName"
            maxLength={32}
          />
        </label>
        <label
          htmlFor="productType"
          className="flex flex-col space-y-1.5 mb-8 text-md text-gray-900 font-semibold "
        >
          {' '}
          <div className="flex justify-between">
            <span>Product Category</span>
          </div>
          <input
            className="border-2 w-[560px] h-[64px] p-x-4 py-4 rounded-lg bg-gray-50 border-gray-200 text-md text-gray-900 font-semibold placeholder:text-gray-400 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={productInfo.productType}
            onChange={(e) => handleChange(e)}
            placeholder="Smartphone, Book , Headphones ... "
            id="productType"
            name="productType"
          />
        </label>
      </fieldset>
    </>
  )
}
