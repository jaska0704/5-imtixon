import React from 'react'

export const AboutOrganic = ({img, title, text}) => {
  return (
    <div className='hover:scale-110  ease-in-out duration-700 '>
        <img className='w-[90%] rounded-t-3xl' src={img} alt="" />
        <div className='flex justify-between items-end w-[90%] shadow-2xl  rounded-b-3xl px-2 py-7'>
            <div className=''>
                <h2 className='font-roboto font-extrabold text-[24px] text-primary'>{title}</h2>
                <p className='font-yell text-secondry text-[21px]'>{text}</p>
            </div>
            <div className='flex gap-2'>
                <img src="/footer-img/Fb.svg" alt="icon" />
                <img src="/footer-img/Insta.svg" alt="icon" />
                <img src="/footer-img/Twiter.svg" alt="icon" />
            </div>
        </div>
    </div>
  )
}
