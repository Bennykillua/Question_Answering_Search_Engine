import React from 'react'

export default function ProductReviewsCard({ index, name, emailId, productName, productType, customerReviews, sentiments }) {
    return (
        <div>

            <div className="flex  items-center space-x-5  pl-4 pr-0 py-2 bg-gray-100 dark:bg-blue-500/10 rounded-md w-full h-[100px]  ring-2 ring-gray-500 dark:ring-gray-100">

                <p className="text-md font-urbanist font-bold text-gray-800  dark:text-gray-100 rounded-md bg-indigo-500/50 px-2">{index+1}</p>
                <div className="flex items-center space-x-6  w-full  py-4 ">


                    <div className="flex items-center min-w-[120px] ">
                        <p className="text-md font-urbanist font-semibold text-gray-800  dark:text-gray-100 ">{name}</p>
                    </div>
                    <div className="flex items-center min-w-[200px]  ">

                        <p className="text-md font-urbanist font-semibold text-gray-800  dark:text-gray-100">{emailId}</p>
                    </div>
                    <div className="flex items-center  min-w-[160px] ">

                        <p className="text-md font-urbanist font-semibold text-gray-800  dark:text-gray-100">{productName}</p>
                    </div>
                    <div className="flex items-center min-w-[140px]  ">

                        <p className="text-md font-urbanist font-semibold text-gray-800  dark:text-gray-100">{productType}</p>
                    </div>
                    <div className="flex items-center w-[300px] ">

                        <span className="text-md font-urbanist text-center font-semibold text-gray-800  dark:text-gray-100 ">{customerReviews}</span>
                    </div>
                    <div className="flex items-center justify-end min-w-[90px] capitalize  ">

                        <span className={`shadow-md ${(sentiments === 'Positive' || sentiments === 'positive') ? 'bg-green-100 text-green-600' : (sentiments === 'Negative' || sentiments === 'negative') ? 'bg-rose-100 text-rose-600' : (sentiments === 'Neutral' || sentiments === 'neutral') ? 'bg-yellow-100 text-amber-600' : 'bg-white text-white'}  text-md font-urbanist font-semibold px-3 py-0.5 rounded-[4px]`}>

                        {sentiments}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

