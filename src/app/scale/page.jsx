import React from 'react'
import homeSrc from '../../../public/bing4.jpg';
import Hero from "@/components/hero";

export const metadata ={
    title:'Scale'
}

export default function Scale() {
  return (
    <Hero imgUrl={homeSrc} altText={'1'} content={'JSDFBSD'}/>
  )
}
