import React from 'react'
import { Buttons } from '../../../../components/buttons/buttons'

export const OrganicJuice = ({img, title}) => {
  return (
    <div className='relative'>
        <img className='w-[93%]' src={img} alt="" />
        <Buttons variant="btn_white" classname="px-[3.5rem] border-none absolute top-[43%] left-[26%]">{title}</Buttons>
    </div>
  )
}
