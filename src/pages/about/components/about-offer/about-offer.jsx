import React from 'react'

export const AboutOffer = ({title, img}) => {
  return (
    <div>
        <img className='max-w-[250px] w-full h-[250px] rounded-3xl bg-white' src={img} alt="images" />
        <p className='font-roboto text-[22px] font-medium text-white'>{title}</p>
    </div>
  )
}
