import React from 'react'
import { Buttons } from '../../components/buttons/buttons'
import { FooterTop } from './footer-top'
import { FooterBottom } from './footer-bottom/footer-bottom'

export const Footer = () => {
  return (
    <div className=' max-w-[1400px] mx-auto'>
       <FooterTop/>
       <FooterBottom/>
    </div>
  )
}
