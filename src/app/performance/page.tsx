import React from 'react'
import homeSrc from '../../../public/bing2.jpg';
import Hero from "@/components/hero";

import { Metadata } from "next";

export const metadata:Metadata ={
    title:'Performance'
}
export default function Performance() {
  return (
    <Hero imgUrl={homeSrc} altText={'1'} content={'JSDFBSD'}/>
  )
}
