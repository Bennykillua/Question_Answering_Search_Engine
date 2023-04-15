import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useTheme } from 'next-themes'

function DoughnutChart({ doughnutChartData }) {
  const { systemTheme, theme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
      <div className="flex flex-col items-center mx-auto pt-3  space-y-4">
      <h2 className="text-lg font-semibold font-inter text-gray-900 dark:text-gray-100">
        Product Ratings (in %)
      </h2>
      <div className="chart-wrapper-doughnut">
        <Doughnut
          data={doughnutChartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Doughnut Chart',
                color: `${currentTheme === 'dark' ? '#ffffff' : '#111111'}`,
                font: {
                  weight: 500,
                },
                padding: {
                    top: 4,
                    bottom:2
                },
              },
              legend: {
                display: true,
                labels: {
                  color: `${currentTheme === 'dark' ? '#ffffff' : '#111111'}`,
                  font: {
                    size: 12,
                  },
                  padding: 12,
                  boxHeight: 9,
                  boxWidth: 50,
                },
                align: 'center',
                position: 'top',
              },
            },
            aspectRatio: 1,
          }}
        />
      </div>
    </div>
  )
}

export default DoughnutChart
