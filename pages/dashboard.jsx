import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { supabase } from '../utils/supabaseClient'
import DashboardStats from '../components/DashboardStats'
import LoadingSpinner from '../components/LoadingSpinner'
import { useTheme } from 'next-themes'


const Dashboard = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme


  const [totalReviews, setTotalReviews] = useState(0)
  const [positiveReviews, setPositiveReviews] = useState(0)
  const [negativeReviews, setNegativeReviews] = useState(0)
  const [neutralReviews, setNeutralReviews] = useState(0)
  const [reviewsCount, setReviewsCount] = useState([0, 0, 0])
  const [isLoading, setIsLoading] = useState(true)

  const [ratingsCount,setRatingsCount] = useState([0,0,0,0,0])

  const pieChartData={
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Sentiment Analysis',
        data: reviewsCount,
        backgroundColor: ['#4ade80', '#fbbf24', '#dc2626'],
        borderColor: `${currentTheme === 'dark' ? '#ffffff' : '#111111'}`,
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  }
  
  const doughnutChartData = {
    labels: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
    datasets: [
      {
        label: 'Ratings Analysis',
        data:ratingsCount,
        backgroundColor: ['#818cf8', '#2563eb', '#14b8a6', '#f43f5e','#b91c1c'],
        borderColor: `${currentTheme === 'dark' ? '#ffffff' : '#111111'}`,
        borderWidth: 2,
      },
    ],
  }
  

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      const { data: result } = await supabase.from('sentiments').select()
      console.log(result)

      const total_reviews = result?.length
      setTotalReviews(total_reviews)

      const positive = result?.filter((item) => item.sentiment === 'positive')
      console.log('Postive Length :', positive.length)
      setPositiveReviews(positive.length);
      
      
      const negative = result?.filter((item) => item.sentiment === 'negative')
      // console.log("negative Length :",negative.length)
      setNegativeReviews(negative.length)
      
      const neutral = result?.filter((item) => item.sentiment === 'neutral')
      // console.log("neutral Length :",neutral.length)
      setNeutralReviews(neutral.length)
      

      const ratings = result?.map((rating) => rating.ratings)
      console.log("Ratings",ratings)

      for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i]
        if (rating >= 4.1 && rating <= 5) {
          setRatingsCount((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[0]++
            return newCounts
          })
        } else if (rating >= 3.1 && rating <= 4) {
          setRatingsCount((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[1]++
            return newCounts
          })
        } else if (rating >= 2.1 && rating <= 3) {
          setRatingsCount((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[2]++
            return newCounts
          })
        } else if (rating >= 1.1 && rating <= 2) {
          setRatingsCount((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[3]++
            return newCounts
          })
        } else if (rating >= 0 && rating <= 1) {
          setRatingsCount((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[4]++
            return newCounts
          })
        }
      }

   
       
      setReviewsCount([
        positive.length,
        neutral.length,
        negative.length
      ])

      
  
      
    }
    fetchData()
    setIsLoading(false)
   

    return () => {
      setIsLoading(false)
      
    }
   
  }, [])
     console.log('', ratingsCount)
  return (
    <div>
      <Layout>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <DashboardStats
            totalReviews={totalReviews}
            positiveReviews={positiveReviews}
            neutralReviews={neutralReviews}
            negativeReviews={negativeReviews}
            pieChartData={pieChartData}
            doughnutChartData={doughnutChartData}
          />
        )}
      </Layout>
    </div>
  )
}

export default Dashboard
