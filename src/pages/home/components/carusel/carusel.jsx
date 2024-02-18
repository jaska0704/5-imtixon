import React from "react";
import Slider from "react-slick";
import { Buttons } from "../../../../components/buttons/buttons";
import img from "/home-img/right.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomerInfo } from "../customer-info.jsx";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <div className='flex justify-between'>
                <div>
                    <img src="/home-img/fon1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-yell text-[30px] text-secondry leading-[49px] my-6'>Testimonial</h3>
                    <h2 className='text-[44px] text-primary font-roboto font-extrabold leading-[59px] mb-10'>What Our Customer Saying?</h2>
                    <img className='inline-block rounded-[50%] mb-7' src="/home-img/user.png" alt="" /><br />
                    <img className='inline-block rounded-[50%] mb-7 w-[10%]' src="/shop-img/Star.png" alt="" />
                    <p className='font-open font-normal text-base text-colorBk leading-[25px] w-[45%] text-center'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h4 className='text-primary font-roboto text-[22px] leading-[29px] font-semibold my-4'>Sara Taylor</h4>
                    <p className='font-open text-[13px] leading-6'>Consumer</p>
                    <hr />
                    <div>
                        <CustomerInfo/>
                    </div>
                </div>
                <div>
                    <img src="/home-img/fon2.png" alt="" />
                </div>
            </div>
        </div>
        <div>
             <div className='flex justify-between'>
                <div>
                    <img src="/home-img/fon1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-yell text-[30px] text-secondry leading-[49px] my-6'>Testimonial</h3>
                    <h2 className='text-[44px] text-primary font-roboto font-extrabold leading-[59px] mb-10'>What Our Customer Saying?</h2>
                    <img className='inline-block rounded-[50%] mb-7' src="/home-img/user.png" alt="" /><br />
                    <img className='inline-block rounded-[50%] mb-7 w-[10%]' src="/shop-img/Star.png" alt="" />
                    <p className='font-open font-normal text-base text-colorBk leading-[25px] w-[45%] text-center'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h4 className='text-primary font-roboto text-[22px] leading-[29px] font-semibold my-4'>Sara Taylor</h4>
                    <p className='font-open text-[13px] leading-6'>Consumer</p>
                    <hr />
                    <div>
                        <CustomerInfo/>
                    </div>
                </div>
                <div>
                    <img src="/home-img/fon2.png" alt="" />
                </div>
            </div>
        </div>
        <div>
              <div className='flex justify-between'>
                <div>
                    <img src="/home-img/fon1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-yell text-[30px] text-secondry leading-[49px] my-6'>Testimonial</h3>
                    <h2 className='text-[44px] text-primary font-roboto font-extrabold leading-[59px] mb-10'>What Our Customer Saying?</h2>
                    <img className='inline-block rounded-[50%] mb-7' src="/home-img/user.png" alt="" /><br />
                    <img className='inline-block rounded-[50%] mb-7 w-[10%]' src="/shop-img/Star.png" alt="" />
                    <p className='font-open font-normal text-base text-colorBk leading-[25px] w-[45%] text-center'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h4 className='text-primary font-roboto text-[22px] leading-[29px] font-semibold my-4'>Sara Taylor</h4>
                    <p className='font-open text-[13px] leading-6'>Consumer</p>
                    <hr />
                    <div>
                        <CustomerInfo/>
                    </div>
                </div>
                <div>
                    <img src="/home-img/fon2.png" alt="" />
                </div>
            </div>
        </div>
        <div>
             <div className='flex justify-between'>
                <div>
                    <img src="/home-img/fon1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-yell text-[30px] text-secondry leading-[49px] my-6'>Testimonial</h3>
                    <h2 className='text-[44px] text-primary font-roboto font-extrabold leading-[59px] mb-10'>What Our Customer Saying?</h2>
                    <img className='inline-block rounded-[50%] mb-7' src="/home-img/user.png" alt="" /><br />
                    <img className='inline-block rounded-[50%] mb-7 w-[10%]' src="/shop-img/Star.png" alt="" />
                    <p className='font-open font-normal text-base text-colorBk leading-[25px] w-[45%] text-center'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h4 className='text-primary font-roboto text-[22px] leading-[29px] font-semibold my-4'>Sara Taylor</h4>
                    <p className='font-open text-[13px] leading-6'>Consumer</p>
                    <hr />
                    <div>
                        <CustomerInfo/>
                    </div>
                </div>
                <div>
                    <img src="/home-img/fon2.png" alt="" />
                </div>
            </div>
        </div>
        
      </Slider>
    </div>
  );
}


export default SimpleSlider;
