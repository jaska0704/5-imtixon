import React from 'react'
import { PaygeHero } from './components/about-hero'
import { HomeAboutTitle } from '../home/components/home-about-title/home-about-title'
import { Buttons } from '../../components/buttons/buttons'
import { AboutModern } from './components/about-modern'
import img from "/home-img/right.svg";
import { AboutSupport } from './components/about-support'
import { products } from '../../data/products_data'
import { AboutIcon1 } from './about-icon/about-icon1'
import { AboutOrganic } from './components/about-organic'
import { AboutOffer } from './components/about-offer'

export const About = () => {
  return (
   <>
     <div>
        <PaygeHero img={"/about-img/about-fon.png"} title={"About Us"}/>
    </div>


    <div className='bg-[#fffff] py-[40px]'>
       <div className=' max-w-[1200px] mx-auto  flex justify-between items-center gap-10'>
          <div data-aos="zoom-in-down" data-aos-duration="2000">
            <img className='max-w-full' src="/about-img/about-main.png" alt="image" /> 
          </div>  
          <div className='max-w-[690px] w-full' data-aos="zoom-in-up" data-aos-duration="3000">
            <HomeAboutTitle text={"About Us"} title={"We Believe in Working Accredited Farmers"} minitext={"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. "}/>
            <HomeAboutTitle minitext="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
            <div className='flex gap-8 justify-center items-center'>
                <AboutModern img={"/about-img/about-icon1.svg"} title={"Modern AgricultureEquipment"}/>
                <AboutModern img={"/about-img/about-icon.svg"} title={"No growth hormones are used"}/>
            </div> 
            <Buttons variant="btn_primary" classname="px-[1.9rem] mt-9">Explore More <img src={img} alt="icon" /></Buttons>        
          </div>
       </div>
    </div>


    <div className='bg-colorWt'>
        <div className='flex gap-9 max-w-[1200px] mx-auto justify-between'>
         <div className='max-w-[520px]' data-aos="fade-down-right" data-aos-duration="2000">
             <HomeAboutTitle text={"Why Choose us?"} title={"We do not buy from the open market & traders."} minitext={"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown"}/>

            <div className='mt-6 mb-3 max-w-[230px] h-[45px] className="font-roboto font-medium text-lg text-primary"px] bg-slate rounded-3xl flex justify-around items-center '>
               <input type="radio" name="group" id="form" />
               <label className="font-roboto font-medium text-lg text-primary" htmlFor="form">100% Natural Product</label>
            </div >
             <p className='font-open font-normal text-base text-colorBk leading-[25px]'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
              <div  className='mt-6 mb-3 max-w-[230px] h-[45px] bg-slate rounded-3xl flex justify-around items-center '>
               <input type="radio" name="group" id="form1" />
               <label className="font-roboto font-medium text-lg text-primary" htmlFor="form1"> Increases resistance</label>
            </div>
             <p className='font-open font-normal text-base text-colorBk leading-[25px]'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>

         </div>
         <div data-aos="fade-down-left" data-aos-duration="2000">
            <img src="/about-img/sabzavotlar.png" alt="" />
         </div>
      </div>

        <div className='max-w-[1200px] mx-auto flex justify-between'>
            {products[0].aboutSupport?.map((item) => (
              <AboutSupport icon={item.img} title={item.title} text={item.text}/>
            ))}
        </div>
    </div>


    <div className='max-w-[1200px] mx-auto mb-28'>
        <div className='max-w-[780px] mx-auto mb-9'>
            <HomeAboutTitle text={"Team"} title={"Our Organic Experts"} minitext={"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
        </div>
        <div className='flex justify-between'>
            {products[0].ourOrganic?.map((item) => (
              <AboutOrganic img={item.img} title={item.title} text={item.text}/>
            ))}
        </div>
    </div>

    <div className='bg-primary'>

        <div className='max-w-[1200px] mx-auto text-center pt-32'>
          <h2 className='text-[2rem] font-yell leading-[49px] text-secondry'>About Us</h2>
          <h2 className='text-[46px] text-white font-roboto font-extrabold leading-[59px]'>What We Offer for You</h2>
         <div className='flex justify-between pb-20 text-center'>
               {products[0].aboutOffer?.map((item) => (
           <AboutOffer img={item.img} title={item.title}/>
          ))}
         </div>
      </div>
    </div>
   </>
  )
}
