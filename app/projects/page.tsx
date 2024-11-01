import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='w-11/12 max-w-5xl flex flex-col gap-16 mx-auto my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-8'>Projects</h1>
                <p className='text-lg'>Here are some of my personal projects from my Github. All of the code for these projects is available on my <Link className='text-main hover:underline' href='https://github.com/43Goose'>Github</Link>. Some of them are hosted using free services and thus could take a while to respond.</p>
            </div>
            {projects.map(proj => (
                <div key={proj.title} className='w-full h-[480px] md:h-[560px] rounded-xl overflow-hidden'>
                    <ProjectCard title={proj.title} description={proj.description} link={proj.link} image={proj.image} frameworks={proj.frameworks} />
                </div>
            ))}
        </div>
    )
}
