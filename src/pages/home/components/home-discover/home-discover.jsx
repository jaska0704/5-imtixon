import React from 'react'
import { Buttons } from '../../../../components/buttons/buttons'
import img from "/home-img/right.svg"


export const HomeDiscover = ({image, title, text}) => {
  return (
    <div className='max-w-[560px] relative mb-52'>
        <img className='rounded-2xl' src={image} />
        <div className='max-w-[81%] bg-white rounded-2xl px-10 py-10 absolute top-[13rem] left-10'>
            <div className='flex gap-1'>
                <img src="/home-img/Vector.svg" alt="user_icon" />
                <p>By Rachi Card</p>
            </div>
            <h5 className='text-[20px] font-roboto font-extrabold leading-[28px] text-primary mt-5'>{title}</h5>
            <p className='font-open font-normal text-base text-colorBk leading-[25px]'>{text}</p>
            <Buttons variant="btn_yellow" classname="px-[2.5rem] mt-7">Read More i <img src={img} alt="" /></Buttons>
        </div>
        <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-white text-base  font-roboto font-extrabold text-primary absolute top-6 left-6 text-center'>
            <p>25 <br />Nov</p>
        </div>
    </div>
  )
}
