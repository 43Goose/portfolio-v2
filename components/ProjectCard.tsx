import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import BrandCard from './BrandCard';
import { BrandType } from '@/lib/types';
import Link from 'next/link';

export default function ProjectCard({ title, description, link, image, frameworks }: { title: string; description: string; link: string; image: StaticImageData; frameworks: BrandType[] }) {
    return (
        <div className='relative w-full h-full flex flex-col justify-end overflow-hidden group'>
            <div className='absolute w-full h-full'>
                <Image src={image} alt={title} width={1920} height={1080} className='h-full min-w-full object-cover transition-transform group-hover:scale-105' />
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-black/35 from-60% to-dark/60' />
            </div>
            <div className='w-full h-min text-light px-4 pb-6 z-10 transition-transform group-hover:-translate-y-4'>
                <Link className='w-max flex items-center gap-2 text-lg cursor-pointer hover:underline' href={link} target='_blank'>
                    <p className='text-2xl font-bold'>{title}</p>
                    <FaExternalLinkAlt />
                </Link>
                <div className='hidden w-min my-4 items-center gap-2 md:flex'>
                    {frameworks.map(i => (
                        <BrandCard key={i.name} name={i.name} icon={i.icon} color={i.color} size='sm' />
                    ))}
                </div>
                <p className='text-lg font-bold text-gray-300'>{description}</p>
            </div>
        </div>
    )
}
