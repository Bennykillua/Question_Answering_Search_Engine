import React, { useState } from 'react'
import Chart from 'chart.js/auto'
import { ArcElement, CategoryScale } from 'chart.js'
import StatCard from './StatCard'
import PieChart from './PieChart'
import DoughnutChart from './DoughnutChart'

Chart.register(CategoryScale)
Chart.register(ArcElement)

function DashboardStats({
  totalReviews,
  positiveReviews,
  neutralReviews,
  negativeReviews,
  pieChartData,
  doughnutChartData,
}) {
  return (
    <div className="relative flex space-y-1 px-2 py-2 flex-col w-full h-full  rounded-lg border-gray-900 dark:border-gray-100     ">
      <div className="flex items-center justify-between space-x-6 w-full h-[170px]  py-1">
        <StatCard title="Total Reviews" data={totalReviews} />
        <StatCard title="Positive" data={positiveReviews} />
        <StatCard title="Neutral" data={neutralReviews} />
        <StatCard title="Negative" data={negativeReviews} />
      </div>
      <div className="flex h-full w-full space-x-6 pt-2  border-gray-900 ">
        <div className="flex bg-gray-200 dark:bg-gray-100/10  rounded-lg w-full h-full ">
          <PieChart pieChartData={pieChartData} />
        </div>
        <div className="flex bg-gray-200 dark:bg-gray-100/10 rounded-lg w-full h-full ">
          <DoughnutChart doughnutChartData={doughnutChartData} />
        </div>
      </div>
    </div>
  )
}

export default DashboardStats
