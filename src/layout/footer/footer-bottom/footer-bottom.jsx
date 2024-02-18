import React from 'react'
import { HeaderIcon } from '../../header/icons/header-icon'
import { Link } from './link/link'

export const FooterBottom = () => {
  return (
    <div className='flex py-11'>
        <div className='w-1/5 text-right border-r-2 pr-7'>
            <h2 className='text-xl font-roboto font-extrabold text-primary leading-[39px] '>Contact Us</h2>
            <div className='flex flex-col gap-3 text-right'>
                <h5 className='font-open text-base text-primary font-semibold'>Email</h5>
                <a className='font-open text-xs text-colorBk font-normal ' href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
            </div>
            <div className='flex flex-col gap-3 text-right'>
                <h5 className='font-open text-base text-primary font-semibold'>Phone</h5>
                <a className='font-open text-xs text-colorBk font-normal ' href="tel:+666 888 888">666 888 888</a>
            </div>
            <div className='flex flex-col gap-3 text-right'>
                <h5 className='font-open text-base text-primary font-semibold'>Address</h5>
                <a className='font-open text-xs text-colorBk font-normal ' href="http://google.map.com">88 road, borklyn street, USA</a>
            </div>
        </div>
        <div className='w-3/5 text-center'>
            <div className='flex gap-2 justify-center'>
                <HeaderIcon/>
                <h2 className='font-roboto font-bold text-[38px] text-primary'>Organick</h2>
            </div>
            <div className='flex justify-center mt-6'>
                <p className='font-open text-xs text-colorBk font-normal w-[360px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
            </div>
            <div className=' flex justify-center gap-5 mt-10'>
                <Link link={"https://www.instagram.com/"} img={"/footer-img/Insta.svg"}/>
                <Link link={"https://www.facebook.com/?locale=ru_RU"} img={"/footer-img/Fb.svg"}/>
                <Link link={"https://twitter.com/?lang=ru"} img={"/footer-img/Twiter.svg"}/>
                <Link link={"https://www.pinterest.com/"} img={"/footer-img/Pintrest.svg"}/>
            </div>
        </div>
        <div className='w-1/5 flex flex-col gap-3 text-left border-l-2 pl-6'>
            <h2 className='text-xl font-roboto font-extrabold text-primary leading-[39px] '>Utility Pages</h2>
            <p className='font-open text-xs text-colorBk font-normal'>Style Guide</p>
            <p className='font-open text-xs text-colorBk font-normal'>404 Not Found</p>
            <p className='font-open text-xs text-colorBk font-normal'>Password Protected</p>
            <p className='font-open text-xs text-colorBk font-normal'>Licences</p>
            <p className='font-open text-xs text-colorBk font-normal'>Changelog</p>
        </div>
    </div>
  )
}
