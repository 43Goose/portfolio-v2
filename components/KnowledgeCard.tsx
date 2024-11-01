import React from 'react';
import Card from './Card';

import { FaAngular, FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa";
import { TbBrandMongodb, TbBrandNextjs } from 'react-icons/tb';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import BrandCard from './BrandCard';

export default function KnowledgeCard() {
    const knowledgeItems = [
        { name: 'React', icon: <FaReact />, color: 'blue' },
        { name: 'NodeJS', icon: <FaNodeJs />, color: 'green' },
        { name: 'NextJS', icon: <TbBrandNextjs />, color: 'blue' },
        { name: 'Angular', icon: <FaAngular />, color: 'red' },
        { name: 'MongoDB', icon: <TbBrandMongodb />, color: 'green' },
        { name: 'JavaScript', icon: <RiJavascriptFill />, color: 'yellow' },
        { name: 'TypeScript', icon: <BiLogoTypescript />, color: 'blue' },
        { name: 'Tailwind', icon: <RiTailwindCssFill />, color: 'blue' },
        { name: 'SASS', icon: <FaSass />, color: 'red' },
        { name: 'Python', icon: <FaPython />, color: 'yellow' },
        { name: 'HTML', icon: <FaHtml5 />, color: 'orange' },
        { name: 'CSS', icon: <FaCss3Alt />, color: 'blue' },
    ]

    return (
        <Card filled>
            <div className='w-full h-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {knowledgeItems.map(i => (
                    <BrandCard key={i.name} name={i.name} icon={i.icon} color={i.color} filled />
                ))}
            </div>
        </Card>
    )
}
