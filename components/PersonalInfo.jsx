import React from 'react'

export default function PersonalInfo({ personalInfo, handleChange }) {
  return (
    <>
      <h1 className="text-gray-900  text-[43px] font-bold">Personal Info</h1>
      <fieldset className="border-none">
        <legend className="font-medium text-md text-gray-400">
          Please provide your name and email address.
        </legend>
        <label
          htmlFor="name"
          className="flex flex-col space-y-1.5 mb-8 text-md text-gray-900 font-semibold mt-8"
        >
          {' '}
          <div className="flex justify-between">
            <span>Full Name</span>
          </div>
          <input
            className="border-2 w-[560px] h-[64px] p-x-4 py-4 rounded-lg bg-gray-50 border-gray-200 text-md text-gray-900 font-semibold placeholder:text-gray-400 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={personalInfo.name}
            onChange={(e) => handleChange(e)}
            placeholder="e.g. Vikas Rai"
            id="name"
            name="name"
            maxLength={32}
          />
        </label>
        <label
          htmlFor="email"
          className="flex flex-col space-y-1.5 mb-8 text-md text-gray-900 font-semibold "
        >
          {' '}
          <div className="flex justify-between">
            <span>Email Address</span>
          </div>
          <input
            className="border-2 w-[560px] h-[64px] p-x-4 py-4 rounded-lg bg-gray-50 border-gray-200 text-md text-gray-900 font-semibold placeholder:text-gray-400 px-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange(e)}
            placeholder="e.g. abc@gmail.com"
            id="email"
            name="email"
          />
        </label>
      </fieldset>
    </>
  )
}
