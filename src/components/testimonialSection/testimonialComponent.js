import React from 'react'

export const TestimonialComponent = ({ name, position, content, index }) => {
  return (
    <div
      className={`testimonial-outer-div ${
        index === 2 && 'testimonial-outer-div-3'
      }`}
    >
      <div>
        <div className="testimonial-name">{name}</div>

        <div className="testimonial-position">{position}</div>
      </div>

      <div className="testimonial-content margin-top-auto">{content}</div>
    </div>
  )
}
