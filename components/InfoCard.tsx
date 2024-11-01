import React from 'react'
import Card from './Card';
import { GrLocation } from 'react-icons/gr';
import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function InfoCard() {
    return (
        <Card>
            <div className='flex flex-col gap-2'>
                <div className='w-full flex justify-between'>
                    <h2 className='text-3xl font-bold text-main'>Owen Edwards</h2>
                    <div className='flex justify-end gap-2'>
                        <Link href='mailto:owenacedwards@gmail.com' className='w-10 h-10 border border-dark rounded-xl transition-[background-color,_transform] hover:bg-main/10 hover:scale-105'>
                            <div className='flex items-center justify-center text-2xl w-full h-full'>
                                <FiMail />
                            </div>
                        </Link>
                        <Link href='https://github.com/43Goose' className='w-10 h-10 border border-dark rounded-xl transition-[background-color,_transform] hover:bg-main/10 hover:scale-105'>
                            <div className='flex items-center justify-center text-2xl w-full h-full'>
                                <FaGithub />
                            </div>
                        </Link>
                        <Link href='https://x.com/Owen_Edwards30' className='w-10 h-10 border border-dark rounded-xl transition-[background-color,_transform] hover:bg-main/10 hover:scale-105'>
                            <div className='flex items-center justify-center text-2xl w-full h-full'>
                                <FaXTwitter />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-1 text-gray-500'>
                    <div className='flex items-center text-xl'>
                        <GrLocation />
                    </div>
                    <h3 className='text-xl'>Vancouver, Canada</h3>
                </div>
            </div>
            <div className='mt-6'>
                <p>{"I'm a self-taught full-stack web and software developer; creating websites and applications for the last 6 years."}</p>
                <p>{"I take pride in the finer details and overall quality of my work."}</p>
            </div>
        </Card>
    )
}
