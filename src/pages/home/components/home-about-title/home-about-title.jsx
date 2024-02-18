import React from 'react'

export const HomeAboutTitle = ({text, title, minitext, minititle}) => {
  return (
    <div className='text-center'>
        <h4 className='text-[30px] text-secondry font-yell leading-[39px]'>{text}</h4> 
        <h2 className='font-roboto font-extrabold text-[44px] text-primary leading-[48px] py-6'>{title}</h2>
        <h5 className='text-[20px] font-roboto font-extrabold leading-[28px] text-primary'>{minititle}</h5>
        <p className='font-open font-normal text-base text-colorBk leading-[25px]'>{minitext}</p>
    </div>
  )
}
