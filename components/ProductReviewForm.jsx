import React from 'react'
import PersonalInfo from './PersonalInfo'
import ProductInfo from './ProductInfo'
import ProductReview from './ProductReview'

export default function ProductReviewForm({ step, formData, handleChange }) {
  return (
    <div>
      {step == 1 && (
        <PersonalInfo personalInfo={formData} handleChange={handleChange} />
      )}
      {step == 2 && (
        <ProductInfo productInfo={formData} handleChange={handleChange} />
      )}
      {step == 3 && (
        <ProductReview productReview={formData} handleChange={handleChange} />
      )}
    </div>
  )
}
