import React from 'react'

// images
import sky from "@/public/images/skyline/Sky.png";
import far from "@/public/images/skyline/Far.png";
import mid from "@/public/images/skyline/Mid.png";
import close from "@/public/images/skyline/Close.png";
import water from "@/public/images/skyline/Water.png";
import Image, { StaticImageData } from 'next/image';
import useScrollPosition from '@/hooks/useScrollPosition';

export default function Parallax() {
    const scrollY = useScrollPosition();
    const images = [sky, far, mid, close, water];

    return (
        <div className='absolute bottom-0 top-0 my-auto w-full h-[120%]'>
            {images.map((img, i) => (
                <ParallaxItem key={i} image={img} alt={'img' + i} speed={0.7 - (0.025 * i)} scrollY={scrollY} />
            ))}
        </div>
    )
}

function ParallaxItem({ image, alt, speed, scrollY }: { image: StaticImageData; alt: string; speed: number; scrollY: number }) {
    return (
        <Image
            src={image}
            alt={alt}
            className='absolute w-auto h-full object-cover md:w-full'
            style={{ top: `${0 + Math.pow(scrollY, speed)}px` }}
        />
    )
}
