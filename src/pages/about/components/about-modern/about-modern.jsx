import React from 'react'

export const AboutModern = ({img, title}) => {
  return (
    <div className='flex gap-4 justify-center items-center mt-12'>
        <img src={img} alt="" />
        <h2 className='font-roboto font-medium text-[20px] leading-6'>{title}</h2>
    </div>
  )
}
