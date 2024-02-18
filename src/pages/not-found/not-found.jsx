import React from 'react'
import { Buttons } from '../../components/buttons/buttons'
import img from "/home-img/right.svg"


export const NotFound = () => {
  return (
    <div className=' relative'>

        <img src="/not-found-img/not.png" alt="not_found" />
        <img className=' absolute top-[180px] right-[15%]' src="/not-found-img/Content.png" alt="" />
        <a href="/"><Buttons variant="btn_primary" classname="px-[2.9rem] absolute top-[80%] right-[33%]">Go to Homepage <img src={img} alt="" /></Buttons></a>
    </div>
  )
}
