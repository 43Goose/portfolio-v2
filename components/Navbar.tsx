'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import logo from '@/public/images/Logo.svg';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className='w-full h-16 border-b-2 border-black shadow-md md:h-24'>
            <div className='w-full h-full font-bold flex items-center justify-between px-4 md:justify-normal md:gap-32 md:px-8'>
                <div className='flex'>
                    <Link className='text-2xl flex items-center gap-2' href='/'>
                        <Image src={logo} alt='site logo' width={48} height={48} className='w-12 h-12' />
                        <p className='hidden md:block'>Owen Edwards</p>
                    </Link>
                </div>
                <div className='flex items-center gap-2 text-xl md:gap-4'>
                    <Link className={clsx('hover:scale-105 hover:text-main', pathname === '/about' && 'text-main')} href='/about'>About</Link>
                    <Link className={clsx('hover:scale-105 hover:text-main', pathname === '/projects' && 'text-main')} href='/projects'>Projects</Link>
                    <Link className={clsx('hover:scale-105 hover:text-main', pathname === '/posts' && 'text-main')} href='/posts'>Posts</Link>
                    <Link className={clsx('hover:scale-105 hover:text-main', pathname === '/contact' && 'text-main')} href='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}
