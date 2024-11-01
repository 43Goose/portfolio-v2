'use client';
import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/lib/types';
import clsx from 'clsx';

export default function ProjectCarousel({ projects }: { projects: ProjectType[] }) {
    const [index, setIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carouselLocal = carousel;
        const handleScroll = () => {
            const scrolledIndex = carouselLocal.current ? carouselLocal.current.scrollLeft / carouselLocal.current.offsetWidth : 0;
            if (scrolledIndex % 1 === 0) {
                setIndex(scrolledIndex);
            }
        };

        carouselLocal.current?.addEventListener('scroll', handleScroll);

        return () => {
            carouselLocal.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const dotClick = (index: number) => {
        if (carousel.current) {
            const width = carousel.current.offsetWidth;
            carousel.current.scrollTo(width * index, 0);

            setIndex(index);
        }
    }

    return (
        <div className='relative h-[480px] md:h-[560px] mx-auto overflow-hidden'>
            <div
                className='w-full h-full flex items-stretch snap-x snap-mandatory scroll-smooth overflow-x-scroll overflow-y-hidden no-scrollbar rounded-xl'
                ref={carousel}
            >
                {projects.map(proj => (
                    <div key={proj.title} className='w-full snap-start shrink-0'>
                        <ProjectCard title={proj.title} description={proj.description} link={proj.link} image={proj.image} frameworks={proj.frameworks} />
                    </div>
                ))}
            </div>
            <Dots currentIndex={index} length={projects.length} changeFn={dotClick} />
        </div>
    )
}

function Dots({ currentIndex, length, changeFn }: { currentIndex: number; length: number; changeFn: (index: number) => void }) {
    return (
        <div className='absolute bottom-2 w-full flex items-center justify-center gap-2 z-10'>
            {Array.from({ length: length }).map((n, i) => (
                <div key={i} className={clsx('h-2.5 bg-gray-300 rounded-full cursor-pointer', i === currentIndex ? 'w-5' : 'w-2.5')} onClick={() => changeFn(i)} />
            ))}
        </div>
    )
}
