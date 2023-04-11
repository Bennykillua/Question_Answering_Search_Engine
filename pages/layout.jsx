import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import DashboardNav from '../components/DashboardNav'
import DashboardHeader from '../components/DashboardHeader'
import { supabase } from '../utils/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [session, setSession] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);
  const router= useRouter()

  useEffect(() => {
    let mounted = true

    async function getInitialSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (mounted) {
        if (session) {
          setSession(session)
          setCurrentUser(session?.user.email)
        }

        setIsLoading(false)
      }
    }

    getInitialSession()

    const { subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      mounted = false

      subscription?.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    console.log('Logout Sucessfully !!');
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>FeedbackHive Dashboard</title>
        <link rel="icon" href="/images/feedbackhive-logo.png" />
      </Head>
      {isLoading && <LoadingSpinner />}
      {!session ? (
        <div className=" mx-auto mt-20 flex flex-col space-y-8 items-center justify-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            You are not Autheticated. Please Login first.
          </p>
          <Link href="/login">
            <a className="w-40 text-center btn  bg-indigo-500 px-5 py-3 text-white hover:shadow-2xl hover:opacity-80">
              Login
            </a>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex  flex-col lg:grid lg:grid-cols-12">
            <div className="flex h-screen sticky top-0 flex-col lg:col-span-2 ">
              <DashboardNav handleLogout={handleLogout} />
            </div>
            <div className=" h-full lg:col-span-10 flex flex-col space-y-2 py-3 px-3  transition duration-300 ease-in bg-gray-50  dark:bg-blue-700/20 ">
              <DashboardHeader username={currentUser} />

              {children}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Layout
