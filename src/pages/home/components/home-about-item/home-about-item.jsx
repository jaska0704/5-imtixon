import React from 'react'


export const HomeAboutItem = ({icon:Icon, text, title}) => {
  return (
    <div className='flex gap-10 mt-10 max-w-[480px]'>
        <div className='w-[90px] h-[70px] rounded-lg bg-white flex justify-center items-center'>
          <Icon/>
        </div>
        <div>
            <h3 className='text-[20px] font-roboto font-extrabold leading-[28px] text-primary'>{title}</h3>
            <p className='font-open text-base text-colorBk leading-[28px]'>{text}</p>
        </div>
    </div>
  )
}
