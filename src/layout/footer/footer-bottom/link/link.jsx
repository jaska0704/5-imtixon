import React from 'react'

export const Link = ({img, link}) => {
  return (
    <div className='w-[50px] h-[50px] rounded-full bg-colorWt flex justify-center items-center'>
        <a href={link}><img src={img} alt="icon" /></a>
    </div>
  )
}
