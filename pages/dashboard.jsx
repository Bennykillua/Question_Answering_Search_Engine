import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { supabase } from '../utils/supabaseClient'
import ProductReviewsCard from '../components/ProductReviewsCard'
import ProductReviewsTableHead from '../components/ProductReviewsTableHead'

const Dashboard = () => {
  const [productReviews, setProductReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      const { data: result } = await supabase.from('sentiments').select()
      setProductReviews(result)
    }

    fetchData()

    setIsLoading(false)
  }, [])

  return (
    <div>
      <Layout>
        <div className="flex ">
          <p className="text-2xl font-bold font-manrope text-gray-900 dark:text-gray-100 py-4 px-2 ">
            User's Reviews Sentiments Analysis
          </p>
        </div>
        <div className="relative flex space-y-6 px-4  py-4 flex-col w-full h-full border-2 border-dashed rounded-lg border-gray-900 dark:border-gray-100    ">
          <ProductReviewsTableHead />
          {isLoading ? (
            <div className="flex pt-10 justify-center w-full h-full">
              <span className=" text-gray-900 dark:text-gray-100 ">
                Loading...
              </span>
            </div>
          ) : (
            productReviews?.map((review, index) => (
              <ProductReviewsCard
                key={review.id}
                index={index}
                name={review.customer_name}
                emailId={review.customer_email}
                productName={review.product_name}
                productType={review.product_type}
                customerReviews={review.customer_reviews}
                sentiments={review.sentiment}
              />
            ))
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Dashboard
