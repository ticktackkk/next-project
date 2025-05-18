import Image from "next/image";
export default function Hero({
    imgUrl,
    altText,
    content
}) {
    return (
        <div className="h-screen relative">
            <div className="absolute inset-0  -z-10" >
                <Image src={imgUrl} alt={altText} fill></Image>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
            </div>
            <div className="flex justify-center pt-96">
                <h1 className="text-white text-6xl">{content}</h1>
            </div>
        </div>
    );
}
