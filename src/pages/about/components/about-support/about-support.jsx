import React from 'react'
import { AboutIcon1 } from '../../about-icon/about-icon1'

export const AboutSupport = ({icon:Icon, title, text}) => {
  return (
    <div className='max-w-[230px] h-[280px] rounded-3xl flex flex-col justify-center items-center gap-5 bg-white px-5 text-center mt-16 mb-36'>
        <div className='w-[80px] h-[80px] rounded-3xl bg-colorWt flex justify-center items-center'><Icon/></div>
        <h2 className='font-roboto font-extrabold text-[21px] leading-7 text-primary'>{title}</h2>
        <h3 >{text}</h3>
    </div>
  )
}
