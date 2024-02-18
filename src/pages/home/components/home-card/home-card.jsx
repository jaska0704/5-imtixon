import React from 'react'
import { products } from '../../../../data/products_data'

export const HomeCard = ({img, spans, title, newPrice, price}) => {
    
  return (
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='hover:shadow-purple-600 max-w-[280px] h-[400px] py-10 px-4 rounded-lg shadow-xl relative bg-white'>
                <img className='bg-none w-[280px] h-[250px]' src={img} alt="" />
                <span className='px-3 py-1 bg-primary text-white absolute top-3 left-3 rounded-xl'>{spans}</span>
                <div className='pt-[10%]'>
                     <p className='font-roboto text-lg font-semibold leading-[23px] text-primary pb-3 border-b-[1px] border-zinc-300'>{title}</p>
                     <div className='flex justify-between'>
                         <div className='flex gap-1'>
                             <span className='font-open text-xs text-[#B8B8B8] leading-[20px] font-semibold line-through'>{price}</span><span className='text-open font-bold text-base'>{newPrice}</span>
                         </div>
                         <img src="/shop-img/Star.png" alt="star_icon" />
                     </div>
                </div>
            </div>
  )
}
