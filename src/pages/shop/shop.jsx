import React from 'react'
import { PaygeHero } from '../about/components/about-hero'
import { HomeCard } from '../home/components/home-card/home-card'
import { products } from '../../data/products_data'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
    <>
    <div>
       <PaygeHero img={"/shop-img/shop-bg.png"} title={"Shop"}/>
    </div>


    <div className='max-w-[1200px] mx-auto flex flex-wrap gap-5 mt-14'>
        {products[0].allData?.map((item) => (
          <Link to={`/Shopsingle/${item.id}`}>
              <HomeCard img={item.img} title={item.title} newPrice={item.newPrice} price={item.price} spans={item.spans}/>
          </Link>
        ))}
    </div>
    </>
  )
}
