import React from 'react'
import { products } from '../../../../data/products_data'

export const CustomerInfo = () => {
  return (
    <div className='flex gap-10 border-t-2 pt-28'>
        {products[0].custemerInfo?.map((item) => (
             <div key={item.id} className='w-[170px] h-[170px] flex flex-col justify-center items-center bg-colorWt rounded-full border-[2px] border-secondry'>
                <h2 className='text-[46px] font-roboto font-extrabold leading-[58px] text-primary'>{item.number}</h2>
                <p className='text-[17px] font-open font-semibold leading-[29px] text-primary'>{item.title}</p>
            </div>
        ))}
    </div>
  )
}
