import React from 'react';

export const TestimonialComponent = ({name, position, content}) => {
  return(
    <div className='testimonial-outer-div'>

      <div className='flex-align-center' style={{gap: "8px"}}>
        <div className='testimonial-name'>
          {name}
        </div>

        <div className='testimonial-position'>
          {position}
        </div>
      </div>

      <div className='testimonial-content'>
        {content}
      </div>

    </div>
  )

}