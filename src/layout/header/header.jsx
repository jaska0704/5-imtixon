import React from 'react'
import { HeaderIcon } from './icons/header-icon'
import { layoutData } from '../../data/layaout-data'
import { nanoid } from 'nanoid'
import { SearchIcon } from './icons/search-icon'
import { CartIcon } from './icons/cart-icon'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-full flex justify-between items-center py-10 px-2'>
       
         <Link className='flex gap-1' to={"/"}>
               <HeaderIcon/>
                <h2 className='font-roboto font-bold text-[38px] text-primary'>Organick</h2>
         </Link>
       
       <div>
           <ul className="flex gap-8" key={nanoid()}>
              {layoutData.map((item) => (
                <li className="text-primary font-roboto flex text-xl font-bold " key={nanoid()}>
                  <a className="active:text-blue-600 " href={item.path}>
                    {item.component}
                  </a>
                </li>
              ))}
            </ul>
       </div>
       <div className='flex gap-5 items-center'>
          <div className='bg-colorWt py-0 rounded-3xl flex items-center'>
            <input className='bg-transparent py-3 px-5' type="text" />
            <SearchIcon/>
          </div>
          <div className=' flex gap-2 items-center border-2 p-1 rounded-3xl'>
              <CartIcon/>
              <p className='font-roboto text-lg font-semibold leading-[21px]'>Cart (0)</p>
          </div>
       </div>
    </div>
  )
}
