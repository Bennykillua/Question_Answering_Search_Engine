import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Logo from './Logo'

const footerClasses = {
  container:
    'relative mt-40 md:mt-0 flex flex-col md:flex-row  space-y-4 md:space-y-0 justify-between items-center px-4 py-4 pb-12 sm:px-6 md:px-12 md:py-4 md:mt-12',

  box__middle:
    'absolute -top-24 left[128px] sm:-top-20 sm:left-[165px] md:-top-1 md:left-[685px] flex space-x-4 ',
}

const Footer = () => {

  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="absolute bottom-2 flex items-center justify-between w-full py-4 space-y-2 items-left">
      <div className="flexflex-col space-y-2">
        <Logo size="S" brandLogo="S" />
        <div className=" text-sm text-gray-500 ">
          Coyright &copy; {new Date().getFullYear()}
          <span className="dark:text-gray-100 text-gray-900 font-semibold text-sm px-2">
            {' '}
            feedbackhive.online{' '}
          </span>{' '}
          All Rights Reserved
        </div>
      </div>
      {/* MindsDB X Hashnode Hackathon */}
      <div className="flex space-x-4">
        {currentTheme === "dark" ? (
          <Image
            src="/images/mindsdb-logo-dark.png"
            width={250}
            height={80}

          />
        ) : (
          <Image
            src="/images/mindsdb-logo-light.png"
            width={250}
            height={80}

          />
        )}
      </div>
      <div className="dark:text-gray-100 text-gray-900 font-bold text-md mr-2">
        Made with ❤️ by{" "}
        <span className="ml-2 font-bold font-inter text-lg tracking-tight bg-gradient-to-r from-indigo-500  to-fuchsia-500 bg-clip-text text-transparent">
          <Link href="https://twitter.com/raivikas200">@raivikas</Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
