import React from 'react'
import { homeMaindData } from '../../../../data/home-main-data'

export const HomeMain = () => {
  return (
      <div  className='max-w-[1200px] mx-auto w-full flex gap-9 justify-between items-center py-16'>
         {homeMaindData.map((item) =>(

            <div data-aos="flip-left" data-aos-duration="2000" key={item.id} className=' relative'>
                <img src={item.img} alt="home_main_img" />
                <div className=' absolute top-[43%] left-10'>
                    <p className={item.classText}>{item.text}</p>
                    <h3 className={item.classTitle}>{item.title}</h3>
                </div>
            </div>
         ))}
      </div>
  )
}