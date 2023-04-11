import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function Thanks() {
  return (
    <div className="font-inter relative flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900/20 ">
      <Head>
        <title>FeedbackHive Thank You</title>
        <link rel="icon" href="/images/feedbackhive-logo.png" />
      </Head>
      <main className="flex space-x-4 w-[1050px] mx-auto mt-10 h-[660px]  shadow-2xl bg-gradient-to-b from-purple-500 to-pink-500 rounded-xl p-6">
        <section className="flex mt-28 justify-center  w-full ">
          <article className="flex flex-col items-center mt-4 w-[580px] ml-[10px]">
            <Image
              className="w-[208px] h-[208px] "
              src="/images/icon-thank-you.svg"
              alt=""
              aria-hidden="true"
              width={150}
              height={150}
            />
            <h1
              className={`font-extrabold text-[60px] mb-[10px] text-gray-900 mt-[24px]`}
            >
              Thank you!
            </h1>
            <p className="font-2xl font-medium text text-center text-gray-100">
              Thanks for filling the form and giving you valuable feedback for
              the product.
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}
