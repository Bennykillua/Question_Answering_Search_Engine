import Link from 'next/link'
import React from 'react'
import BrandLogo from './BrandLogo'

const Logo = ({ size, brandLogo }) => {
  return (
    <div>
      <Link href="/">
        <a className="decoration-none">
          <div className="flex items-center space-x-2">
            <div
              className={`${
                brandLogo === 'L'
                  ? 'mt-0'
                  : brandLogo === 'M'
                  ? 'mt-2.5'
                  : 'mt-1.5'
              }`}
            >
              <BrandLogo size={brandLogo} />
            </div>
            <p
              className={`${
                size === 'L'
                  ? 'text-[30px]'
                  : size === 'M'
                  ? 'text-[23px]'
                  : 'text-[`18px]'
              } pt-1 font-extrabold font-inter underline decoration-wavy decoration-cyan-500 dark:decoration-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500`}
            >
              FeedbackHive
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Logo
