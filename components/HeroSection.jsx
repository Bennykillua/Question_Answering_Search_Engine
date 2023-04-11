import Image from 'next/image'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import RectanglePatternBackground from './RectanglePatternBackground'

const HeroSection = () => {
  return (
    <div className="relative flex flex-col max-w-7xl w-full bg-transparent min-h-screen space-y-4 z-20 ">
      {/* NavBar */}
      <Navbar />
      {/* Rectangle Pattern Background */}

      <RectanglePatternBackground opacity="hero" />

      {/* Blur  Pattern Background */}
      <div className="">
        <div className="pointer-events-none absolute left-60 top-72 h-[261px] w-[261px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-[0.49] rounded-full mix-blend-normal blur-[60px] dark:opacity-[0.6]"></div>
      </div>
      <div className="absolute top-36 right-[0px]">
        <Image
          className="rounded-xl "
          width={325}
          height={196}
          src="/review-new.png"
        />
      </div>
      <div className="absolute top-[262px] right-52">
        <Image
          className="rounded-xl "
          width={350}
          height={276}
          src="/reviews.png"
        />
      </div>

      <div className="">
        <div className="pointer-events-none absolute right-20 top-72 h-[261px] w-[261px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-[0.29] rounded-full mix-blend-normal blur-[60px] dark:opacity-[0.32]"></div>
      </div>

      {/* Main Section */}
      <div className="relative flex justify-between pt-12">
        {/* Left Side */}
        <div className="flex flex-col ">
          <div className="flex flex-col  space-y-8   w-[670px]">
            <h2 className=" text-5xl font-extrabold font-inter text-gray-900 dark:text-gray-100 leading-snug">
              <span className="block leading-tight font-inter">
                Empower Your
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Customers to
              </span>
              <span className="block leading-tight font-inter">
                Share Their Thoughts.
              </span>
            </h2>
            <p className="w-[440px] text-sm font-medium text-gray-800 dark:text-gray-100 font-inter">
              Our platform makes it easy to gather feedback and analyze it to
              improve your product recommendations to users.
            </p>
            <div className="flex space-x-4 ">
              <button className=" btn bg-blue-500 px-5 py-3 text-white shadow-md hover:shadow-2xl hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HeroSection
