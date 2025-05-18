import Image from "next/image";
import homeSrc from '../../public/bing1.jpg';
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata:Metadata ={
    title:'Home'
}

export default function Home() {
    return (
        <Hero imgUrl={homeSrc} altText={'1'} content={'JSDFBSD'}/>
    );
}
