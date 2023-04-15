import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { supabase } from '../utils/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'
import ReviewsCard from '../components/ReviewsCard'

const ProductReviews = () => {
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
        <div className=''>
            <Layout>
                <div className="flex ">
                    <p className="text-2xl font-bold font-urbanist text-gray-900 dark:text-gray-100 py-4 px-2 ">
                        Product Review's  
                    </p>
                </div>
                <div className="relative flex space-y-6 px-24  py-6 flex-col w-full h-full border-2 border-dashed rounded-lg border-gray-900 dark:border-gray-100 ">
                    {isLoading ? (
                        <div className="flex pt-10 justify-center w-full h-full">
                            <span className=" text-gray-900 dark:text-gray-100 ">
                               <LoadingSpinner />
                            </span>
                        </div>
                    ) : (
                        
                        productReviews?.map((review, index) => (
                            <ReviewsCard
                                key={review.id}
                                index={index}
                                createdAt={review.created_at}
                                name={review.customer_name}
                                emailId={review.customer_email}
                                productName={review.product_name}
                                productType={review.product_type}
                                customerReviews={review.customer_reviews}
                                ratings={review.ratings}
                                sentiments={review.sentiment}
                            />
                        ))
                            
                    )}
                </div>
            </Layout>
        </div>
    )
}

export default ProductReviews
