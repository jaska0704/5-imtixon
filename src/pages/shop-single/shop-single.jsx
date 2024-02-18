import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../../data/products_data'
import { PaygeHero } from '../about/components/about-hero';
import { Buttons } from '../../components/buttons/buttons';
import img from "/home-img/right.svg"
import { HomeCard } from '../home/components/home-card/home-card';


export const ShopSingle = () => {
  const {id} = useParams();
  const data = products[0].allData.find((item) => item.id == id);
  console.log(data);

  return (
    <div>
      {data ? (
        <>
        <PaygeHero img={"/shop-img/shopsp.jpg"} title={"Shop Single"}/>


       <div className='bg-colorWt pb-10'>


           <div className=' flex relative justify-between items-center max-w-[1200px] mx-auto pt-9 gap-8'>
            <img className='w-[90%] rounded-2xl shadow-xl' src={data.img} alt="image" />
            <span className=' absolute top-16 left-10 bg-primary text-white px-3 py-1 rounded-xl '>{data.spans}</span>
            <div className='max-w-[620px] w-full'>
                <h2 className='font-roboto text-[38px] text-primary '>{data.title}</h2>
                <img src={data.img_star} alt="" />
                <div className='flex gap-2'>
                    <span className='font-open text-xs text-[#B8B8B8] leading-[20px] font-semibold'>{data.price}</span><span className='text-open font-bold text-base'>{data.newPrice}</span>
                </div>
                <p className='font-open font-normal text-base text-colorBk leading-[25px] w-[85%] text-left my-10'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='flex gap-4 items-center'>
                    <span>Quantity :</span>
                    <h2 className='w-[80px] h-[40px] border-2 flex justify-center items-center rounded-2xl'>1</h2>
                    <Buttons variant="btn_primary" classname="px-[2.9rem]">Add To Cart <img src={img} alt="" /></Buttons>
                </div>
            </div>
          </div>

          <div className='text-center max-w-[1200px] mx-auto'>
              <div className='flex justify-center gap-10 mt-[100px]'>
                  <Buttons variant="btn_primary" classname="px-[3.5em]">Product Description</Buttons>
                  <Buttons variant="btn_slate" classname="px-[3.4em]">Additional Info</Buttons>
              </div>
              <p className='font-open font-normal text-base text-colorBk leading-[25px]  text-center mt-10 mb-24'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
          </div>

          <div className='max-w-[1200px] mx-auto text-center'>
               <h1 className='font-roboto text-[50px] text-primary font-extrabold'>Related Products</h1>
               <div key={id} className='flex flex-wrap gap-4'>
                        {products[0].allData?.slice(0,4)?.map((item) => (
                     <Link to={`/Shopsingle/${item.id}`}>
                  <HomeCard key={item.id} img={item.img} title={item.title} newPrice={item.newPrice} price={item.price} spans={item.spans}/>
                     </Link>
                ))}
               </div>
          </div>
       </div>
        </>
      ) : (
        <h1> not found</h1>
      )}

    </div>
  )
}
