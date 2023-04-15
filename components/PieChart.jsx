import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useTheme } from 'next-themes'

function PieChart({ pieChartData }) {
  const { systemTheme, theme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="flex flex-col items-center mx-auto pt-3 space-y-4">
      <h2 className="text-lg font-semibold font-inter text-gray-900 dark:text-gray-100">
        Sentiment Analysis of Customer Reviews
      </h2>
      <div className="chart-wrapper-pie">
        <Pie
          data={pieChartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Pie Chart',
                color: `${currentTheme === 'dark' ? '#ffffff' : '#111111'}`,
                font: {
                  weight: 500,
                },
                padding: {
                  top: 6,
                },
              },
              legend: {
                display: true,
                labels: {
                  color: `${currentTheme === 'dark' ? '#ffffff' : '#111111'}`,
                  font: {
                    size: 12,
                  },
                  boxHeight: 9,
                  boxWidth: 50,
                },
              },
            },
            aspectRatio: 1,
          }}
        />
      </div>
    </div>
  )
}

export default PieChart
