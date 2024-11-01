'use client';
import useIsMobile from '@/hooks/useIsMobile';
import useScrollPosition from '@/hooks/useScrollPosition';
import React from 'react'
import Parallax from './Parallax';

export default function Splash() {
    const scrollY = useScrollPosition();
    const isMobile = useIsMobile();

    return (
        <div className='relative h-[440px] mx-auto mt-16 rounded-3xl overflow-hidden'>
            <Parallax />
            {isMobile ? <DevDesMobile scrollY={scrollY} /> : <DevDes scrollY={scrollY} />}
        </div>
    )
}

function DevDes({ scrollY }: { scrollY: number }) {
    return (
        <div
            className='absolute w-full max-w-[690px] h-32 left-8 text-6xl text-light font-bold text-nowrap overflow-hidden'
            style={{ top: `${48 + Math.pow(scrollY, 0.9)}px` }}
        >
            <div className='absolute w-[356px] h-min top-0 left-0 overflow-hidden'>
                <p className='animate-slide-from-right'>DEVELOPER</p>
            </div>
            <div className='absolute -top-4 left-0 right-0 mx-auto w-3 h-[120%] bg-light rotate-[25deg]' />
            <div className='absolute w-[312px] text-right h-min bottom-0 right-12 overflow-hidden'>
                <p className='animate-slide-from-left'>DESIGNER</p>
            </div>
        </div>
    )
}

function DevDesMobile({ scrollY }: { scrollY: number }) {
    return (
        <div className='absolute w-full px-4 text-3xl text-light font-bold' style={{ top: `${16 + Math.pow(scrollY, 0.9)}px` }}>
            <p className='animate-slide-from-left'>DEVELOPER</p>
            <div className='w-32 h-1 ml-8 overflow-hidden'>
                <div className='w-full h-full bg-light animate-slide-from-left' />
            </div>
            <p className='animate-slide-from-right'>DESIGNER</p>
        </div>
    )
}
