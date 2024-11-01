import React from 'react'
import { FaFreeCodeCamp, FaGithub, FaRegCopyright } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div className='relative w-full h-20 border-t border-black md:h-24'>
            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-dark/30' />
            <div className='relative w-full h-full px-4 pt-2 flex flex-col items-center justify-start gap-2 z-10 md:pt-4 md:flex-row md:items-start md:justify-between md:gap-0'>
                <div className='flex items-center gap-2 font-bold md:text-xl'>
                    <span className='flex items-center gap-1'>
                        <FaRegCopyright />
                        <p>2024</p>
                    </span>
                    <p>Owen Edwards</p>
                </div>
                <div className='flex gap-2 text-xl md:text-3xl'>
                    <a href='https://github.com/43Goose' target='_blank'>
                        <FaGithub />
                    </a>
                    <a href='https://x.com/Owen_Edwards30' target='_blank'>
                        <FaXTwitter />
                    </a>
                    <a href='https://www.freecodecamp.org/GooseFCC' target='_blank'>
                        <FaFreeCodeCamp />
                    </a>
                </div>
            </div>
        </div>
    )
}
