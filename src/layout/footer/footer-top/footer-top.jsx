import React from 'react'
import img from "/footer-img/Background.png"
import { Buttons } from '../../../components/buttons/buttons'

export const FooterTop = () => {
  return (
    <div className=' relative pt-20'>
        <img src={img} alt="background-footer" />
        <div className='max-w-[357px] absolute top-[47%] left-16'>
            <h2 className='font-roboto text-[50px] font-extrabold leading-[58px] text-white'>Subscribe to our Newsletter</h2>
        </div>
        <input className=' placeholder:italic py-[.8em] px-[2.1rem] rounded-lg absolute top-[230px] right-[240px] font-roboto text-lg' type="text" placeholder='Your Email Address'/>
        <Buttons variant="btn_primary" classname="px-[1.9em] absolute top-[230px] right-16">Subscribe</Buttons>
    </div>
  )
}
