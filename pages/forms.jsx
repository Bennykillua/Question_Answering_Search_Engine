import React, { useEffect, useState } from 'react'
import Step from '../components/Step'
import ProductReviewForm from '../components/ProductReviewForm'
import ThankYou from '../components/ThankYou'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/router'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'

export default function FormLayout() {
  const router = useRouter()
  const stepTitles = [
    'your info',
    'product info',
    'product review',
    'thank you',
  ]

  const [step, setStep] = useState(1)
  const [isFormSubmit, setIsFormSubmit] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productName: '',
    productType: '',
    customerReview: '',
    ratings: '',
    sentiment: '',
  })

  useEffect(() => {
    setIsFormSubmit(false)
    if (isFormSubmit) {
      router.push('/thank-you')
      setTimeout(function () {
        router.push('/')
      }, 1000)
    }
    return () => {
      setIsFormSubmit(false)
    }
  }, [isFormSubmit])

  function handleChange(e) {
    const newValue = e.target.value
    const inputField = e.target.name

    setFormData((prevValue) => {
      if (inputField === 'name') {
        return {
          name: newValue,
          email: prevValue.email,
          productName: prevValue.productName,
          productType: prevValue.productType,
          customerReview: prevValue.customerReview,
          ratings: prevValue.ratings,
        }
      } else if (inputField === 'email') {
        return {
          name: prevValue.name,
          email: newValue,
          productName: prevValue.productName,
          productType: prevValue.productType,
          customerReview: prevValue.customerReview,
          ratings: prevValue.ratings,
        }
      } else if (inputField === 'productName') {
        return {
          name: prevValue.name,
          email: prevValue.email,
          productName: newValue,
          productType: prevValue.productType,
          customerReview: prevValue.customerReview,
          ratings: prevValue.ratings,
        }
      } else if (inputField === 'productType') {
        return {
          name: prevValue.name,
          email: prevValue.email,
          productName: prevValue.productName,
          productType: newValue,
          customerReview: prevValue.customerReview,
          ratings: prevValue.ratings,
        }
      } else if (inputField === 'customerReview') {
        return {
          name: prevValue.name,
          email: prevValue.email,
          productName: prevValue.productName,
          productType: prevValue.productType,
          customerReview: newValue,
          ratings: prevValue.ratings,
        }
      } else if (inputField === 'ratings') {
        return {
          name: prevValue.name,
          email: prevValue.email,
          productName: prevValue.productName,
          productType: prevValue.productType,
          customerReview: prevValue.customerReview,
          ratings: newValue,
        }
      }
    })
  }

  const handleGoBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    if (step >= 1 || step <= 2) {
      setStep(step + 1)
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    if (step !== 3) {
      handleNext()
      return
    }
    handleNext()
    setIsFormSubmit(true)

    const { error } = await supabase.from('sentiments').insert({
      customer_name: formData.name,
      customer_email: formData.email,
      product_name: formData.productName,
      product_type: formData.productType,
      ratings: formData.ratings,
      customer_reviews: formData.customerReview,
      sentiment: formData.sentiment,
    })

    if (!error) {
      console.log('Uploaded !!');
      toast.success('Form Submitted, Thank you for you feedback !!', {
        duration: 3000,
        style: {
          border: '2px solid black',
          background: 'green',
          color: 'white',
          fontWeight: 'medium',
          fontSize: '16px',
          padding: '10px 20px',
        },
      })
      setIsFormSubmit(true)
    } else {
      console.log(error);
      toast.error('Error ,Form Not Submitted !!', {
        duration: 3000,
        style: {
          border: '2px solid black',
          background: 'red',
          color: 'white',
          fontWeight: 'medium',
          fontSize: '16px',
          padding: '10px 20px',
        },
      })
    }
  }

  return (
    <div className="font-inter relative flex min-h-screen flex-col bg-gradient-to-br from-cyan-500 to-blue-500">
      <Head>
        <title>FeedbackHive - Feedback Form</title>
        <link rel="icon" href="/images/feedbackhive-logo.png" />
      </Head>
      <Toaster position="top-center" />
      <main className="flex space-x-4 w-[1050px] mx-auto mt-10 h-[660px] bg-white shadow-2xl rounded-xl p-6">
        <aside className="py-12 px-8 h-full w-[300px] min-w-[300px] rounded-xl  bg-no-repeat bg-hero bg-cover">
          {stepTitles.map((title, i) => {
            return (
              <Step key={title} step={step} stepNumber={i + 1}>
                {title}
              </Step>
            )
          })}
        </aside>

        <form
          onSubmit={handleFormSubmit}
          className="relative flex  flex-col py-4 px-20 rounded-xl w-full"
        >
          {step != 4 ? (
            <>
              <ProductReviewForm
                step={step}
                formData={formData}
                handleChange={handleChange}
              />
              <div className="absolute flex justify-between left-0 bottom-6 py-4 px-20 w-[735px] ">
                <button
                  type="button"
                  onClick={handleGoBack}
                  className={
                    step >= 2
                      ? 'bg-transparent font-inter  text-gray-400 font-medium hover:bg-gray-200 border-none rounded-md text-lg  cursor-pointer px-6 py-2.5'
                      : '-z-10 '
                  }
                >
                  Go back
                </button>
                <button
                  type="submit"
                  className={` bg-gray-900 text-gray-100 font-medium hover:bg-gray-600 border-none rounded-md text-xl  cursor-pointer px-6 py-2.5 ${
                    step >= 3 ? 'bg-blue-600' : ''
                  }`}
                >
                  {step == 3 ? 'Submit' : 'Next Step'}
                </button>
              </div>
            </>
          ) : (
            <ThankYou />
          )}
        </form>
      </main>
    </div>
  )
}
