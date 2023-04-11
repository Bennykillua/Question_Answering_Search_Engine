import React from "react";;
import Logo from "./Logo";
import { CreditCardIcon,UserGroupIcon} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";


const DashboardNav = ({ handleLogout }) => {

    const router = useRouter();

    return (
        <header className=" flex h-full flex-col py-4 space-y-6 transition duration-300 ease-in bg-gradient-to-b from-blue-50 to-blue-400/50 dark:bg-gradient-to-b dark:from-gray-900  dark:to-gray-800 ">
            <div className="flex items-center ml-6 pt-1">
                {/* Logo */}
                <Logo size='M' />
            </div>
            <div className="flex  justify-center  flex-1">
                {/* <ThemeChanger /> */}
                <div className="flex px-2 py-6 w-full mx-3">
                    <ul className="flex flex-col w-full list-none space-y-4">
                        <Link href="/dashboard">
                            <a className={` hover:bg-blue-500/20 dark:hover:bg-blue-700/50 w-full flex items-center  space-x-1.5  decoration-none cursor-pointer font-inter transition duartion-300 ease-in  rounded-lg  px-3 py-3 text-gray-800 font-semibold ${router.pathname === '/dashboard' ? 'bg-blue-500/30 dark:bg-blue-500/50 ' : ''}`}>
                                <CreditCardIcon className=" w-5 h-5 md:w-5 md:h-5 text-blue-500 dark:text-blue-200 " />
                                <li className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100">
                                    Dashboard
                                </li>
                            </a>
                        </Link>                
                    </ul>
                </div>
            </div>

            {/* <Avatar username={username} /> */}
            <div className="flex px-6 ">

                <button
                    onClick={handleLogout}
                    type="submit"
                    className="w-full btn bg-indigo-600 px-5 py-3 text-white  hover:shadow-2xl hover:opacity-80 "
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default DashboardNav;