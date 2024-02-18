import React from 'react'

export const PaygeHero = ({title, img}) => {
  return (
    <div className=' relative'>
        <img src={img} alt="banner-about" />
        <img className=' absolute top-0 left-0' src="/about-img/Backgr.png" alt="banner-about" />
        <h2 className='text-[45px] text-primary font-roboto font-extrabold leading-[49px] absolute top-[130px] left-[46%]'>{title}</h2>
    </div>
  )
}
