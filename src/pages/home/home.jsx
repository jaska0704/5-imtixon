import React from 'react'
import img from "/home-img/right.svg"
import { Buttons } from '../../components/buttons/buttons';
import { HomeMain } from './components/home-main';
import { HomeAboutTitle } from './components/home-about-title/home-about-title';
import { HomeAboutItem } from './components/home-about-item/home-about-item';
import { Organic } from './home-icons/organic';
import { Quality } from './home-icons/quality';
import { HomeCard } from './components/home-card/home-card';
import { CustomerInfo } from './components/customer-info.jsx';
import { products } from '../../data/products_data.js';
import { OrganicJuice } from './components/organic-juice/organic-juice.jsx';
import { HomeDiscover } from './components/home-discover/home-discover.jsx';
import { Link } from 'react-router-dom';
import SimpleSlider from './components/carusel/carusel.jsx';


export const Home = () => {
  return (
    <>
    
     <div className='home-hero bg-[url("/home-img/Banner.jpg")] w-[100%] h-[700px] bg-cover pt-[150px]'>
          <div className='max-w-[1200px] mx-auto '>
                    <p className='font-yell text-[30px] text-secondry'>100% Natural Food</p>
                    <div className='max-w-[460px]'>
                        <h1 className='font-roboto text-[60px] text-primary font-extrabold'>Choose the best healthier way <br/> of life</h1>
                    </div>
                    <Buttons variant="btn_yellow" classname="px-[2.5rem]">Explore Now <img src={img} alt="icon" /></Buttons>
          </div>
      </div>

      
    <div  className=''>
        <HomeMain/>
    </div>


    <div className='bg-colorWt py-[40px]'>
       <div className=' max-w-[1200px] mx-auto  flex items-center gap-10'>
          <div data-aos="zoom-in-down" data-aos-duration="2000">
              <img className='max-w-full' src="/home-img/Photo.png" alt="image" />
          </div>
          <div className='max-w-[590px]' data-aos="zoom-in-up" data-aos-duration="3000">
            <HomeAboutTitle text={"About Us"} title={"We Believe in Working Accredited Farmers"} minitext={"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
            <HomeAboutItem icon={Organic} title={"Organic Foods Only"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <HomeAboutItem icon={Quality} title={"Organic Foods Only"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <Buttons variant="btn_primary" classname="px-[2.5rem] mt-9">Shop Now <img src={img} alt="icon" /></Buttons>
          </div>
       </div>
    </div>


    <div className='max-w-[1200px] mx-auto text-center mt-24'>
      <h3 className='font-yell text-[30px] text-secondry leading-[45px]'>Categories </h3>
      <h2 className='text-[44px] text-primary font-roboto font-extrabold leading-[59px] mb-10'>Our Products</h2>
      <div className='max-w-[1200px] mx-auto flex flex-wrap gap-4'>
           {products[0].allData.slice(0,8)?.map((item) => (
      <Link to={`/Shopsingle/${item.id}` } key={item.id}>
        <HomeCard  img={item.img} title={item.title} spans={item.spans} newPrice={item.newPrice} price={item.price}/>
      </Link>
      ))}
      </div>
        <div className='my-[60px]'>
             <Link to={"/Shop"} >
                <Buttons variant="btn_primary" classname="px-[2.5rem] mx-auto">Load More <img src={img} alt="icon" /></Buttons>
            </Link>
        </div>
    </div>


   <SimpleSlider/>


    <div className=' text-center bg-primary py-16'>
        <div className='max-w-[1200px] mx-auto pb-[200px]'>
            <div className='flex justify-between mb-2 pt-28'>
                <div data-aos="zoom-in-right" data-aos-duration="3000">
                  <h3 className='font-yell text-[30px] text-secondry leading-[45px] text-left'>Offer </h3>
                  <h2 className='text-[44px] text-colorHt font-roboto font-extrabold leading-[59px] mb-10'>We Offer Organic For You</h2>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="2000">
                    <Buttons variant="btn_yellow" classname="px-[2.5rem]">View All Product<img src={img} alt="icon" /></Buttons>
                </div>
        </div>
        <div className='flex gap-4'>
        {products[0].ofterOrganic?.map((item) => (
            <HomeCard key={item.id} img={item.img} title={item.title} spans={item.spans} newPrice={item.newPrice} price={item.price}/>
        ))}
      </div>
        </div>
    </div>


    <div>
          <div className=' relative  max-w-full mx-auto'>
        <div data-aos="fade-right"  data-aos-duration="2000">
            <img className='max-w-[50%]' src="/home-img/Econis-fon.jpg" alt="econis_fon" />
        </div>
        <div data-aos="fade-left"  data-aos-duration="2000" className=' absolute top-[5rem] left-[43rem] bg-white rounded-xl max-w-[700px] py-20 px-20'>
            <HomeAboutTitle text={"Eco Friendly"} title={"Econis is a Friendly Organic Store"} minititle={"Start with Our Company First"} minitext={"Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."}/>
            <h5 className='text-[20px] font-roboto font-extrabold leading-[28px] text-primary mt-5'>Learn How to Grow Yourself</h5>
            <p className='font-open font-normal text-base text-colorBk leading-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

            <h5 className='text-[20px] font-roboto font-extrabold leading-[28px] text-primary mt-5'>Farming Strategies of Today</h5>
            <p className='font-open font-normal text-base text-colorBk leading-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
        </div>
    </div>
    </div>


    <div className='flex justify-between items-center py-28 bg-colorWt'>
        {products[0].organicNuts?.map((item) => (
          <OrganicJuice img={item.img} title={item.title} key={item.id}/>
        ))}
    </div>


    <div className='max-w-[1200px] mx-auto '>
         <div className='flex justify-between mb-2 pt-28'>
                <div className='max-w-[600px]' data-aos="zoom-in-right" data-aos-duration="3000">
                  <h3 className='font-yell text-[30px] text-secondry leading-[45px] text-left'>Offer </h3>
                  <h2 className='text-[44px] text-primary font-roboto font-extrabold leading-[59px] mb-10'>Discover weekly content about organic food, & more</h2>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="2000">
                    <Buttons variant="btn_white" classname="px-[2.5rem]">More News <img src={img} alt="icon" /></Buttons>
                </div>
        </div>
        <div className='flex justify-between '>
            {products[0].discoverData?.map((item) => (
          <HomeDiscover key={item.id} image={item.img} title={item.title} text={item.text}/>
        ))}
        </div>
    </div>
    </>
  )
}
