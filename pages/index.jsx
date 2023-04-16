import Head from 'next/head'
import React from 'react'
import HeroSection from '../components/HeroSection'
import { supabase } from '../utils/supabaseClient'
import MindsDB from 'mindsdb-js-sdk'

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col  justify-between items-center  bg-gray-100 dark:bg-gray-900 z-10 overflow-hidden custom-scroll">
      <Head>
        <title>Feedback Hive</title>
        <link rel="icon" href="/images/feedbackhive-logo.png" />
      </Head>

      <HeroSection />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const { data: sentimentData } = await supabase
    .from('sentiments')
    .select('id, customer_reviews')
    .is('sentiment', null)

  if (sentimentData?.length === 0) {
    console.log('NULL')
    return {
      props: {},
    }
  }
  const id = sentimentData[0]?.id
  const review = sentimentData[0]?.customer_reviews

  const string = `"${review}"`

  const query = `SELECT * FROM mindsdb.sentiment_analyzer_model WHERE customer_reviews=${string}`

  // Connecting to MindsDB via Email & Password

  try {
    await MindsDB.connect({
      user: process.env.EMAIL,
      password: process.env.PASSWORD,
    })
  } catch (error) {
    // Failed to authenticate.
  }

  // Passing the "Customer Reviews" obtained from the form submitted by users,
  // to MindsDB Model (Sentiment_Analyzer_Model)

  const queryResult = await MindsDB.SQL.runQuery(query)
  const data = await queryResult.rows[0].sentiment

  // Updating Sentiment Clolumn Data in database

  const { error } = await supabase
    .from('sentiments')
    .update({ sentiment: data })
    .eq('id', id)
  if (!error) {
    console.log('Updated !!!')
  }

  return {
    props: {
      data,
    },
  }
}
