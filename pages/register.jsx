import React, { useState } from 'react'
import Link from 'next/link';
import RectanglePatternBackground from '../components/RectanglePatternBackground';
import BrandLogo from '../components/BrandLogo';
import { supabase } from '../utils/supabaseClient';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SignUpPage() {
    const router = useRouter();

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSignUp = async () => {

        const { data, error } = await supabase.auth.signUp({
            email:userEmail,
            password:userPassword
        });
        alert("Check you Email and Click on the link to Confirm Signup.")
        router.push('/login')
        setUserEmail("")
        setUserPassword("")
    }

    return (
        <div className="relative flex flex-col w-full min-h-screen bg-white dark:bg-transparent ">
            <Head>
                <title>FeedbackHive - Regiter</title>
                <link rel="icon" href="/images/feedbackhive-logo.png" />
            </Head>
            <RectanglePatternBackground opacity="0.5" />
            <div className="absolute top-10 right-10">
                <Link href="/login">
                    <button type="button" className=" text-white bg-blue-500 hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-6 py-2 text-center  dark:bg-blue-500 dark:hover:bg-opacity-70 dark:focus:ring-cyan-800">
                        Login
                    </button>
                </Link>
            </div>
            <div className="flex flex-col max-w-md w-full h-screen mx-auto px-6 ">
                <div className="flex flex-col space-y-2 items-center justify-center mt-32 mb-2">
                    <BrandLogo size="L" brandLogo="L" />
                    <div className="flex flex-col space-y-1 items-center justify-center">
                        <p className="text-gray-900 text-3xl dark:text-gray-100 font-bold ">Create an Account</p>
                        <p className="text-gray-900 text-md dark:text-gray-100 font-normal "> Enter your email below to create your account</p>
                    </div>
                </div>
                <div className="flex flex-col  space-y-5 pt-5 pb-2" >
                    <div className="flex flex-col">
                 
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-900 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="email" id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@feedbackhive.com" />
                        </div>
                    </div>

                    <div className="flex flex-col pb-3">
                        {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label> */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-900 dark:text-gray-100">
                                    <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="password" id="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••••••" />
                        </div>
                    </div>

                    <button onClick={handleSignUp} type="button" className=" text-white bg-blue-500 hover:bg-opacity-60 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-blue-500 dark:hover:bg-opacity-70 dark:focus:ring-cyan-800">
                        Sign Up with Email
                    </button>

                </div>
                <p className="mt-2 cursor-pointer max-w-md  text-gray-900 text-center dark:text-gray-100 font-medium text-sm">
                    By clicking continue, you agree to our
                    <span className="px-1 font-bold underline underline-offset-2 ">
                        Terms of Service
                    </span>and <span className="px-1 font-bold underline underline-offset-2 ">Privacy Policy</span>
                </p>

            </div>
        </div>
    )
}
