import Card from '@/components/Card'
import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'

export default function page() {
    return (
        <div className='w-11/12 max-w-5xl mx-auto mt-16 mb-96'>
            <Card>
                <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex flex-col gap-2 font-bold'>
                        <h1 className='text-3xl'>Contact Me</h1>
                        <span className='text-lg text-gray-500'>
                            <h2>Feel free to send me an email or a DM on any of the platforms below.</h2>
                            <h2>I typically respond within 24 hours.</h2>
                        </span>
                    </div>
                    <div className='w-full grid grid-rows-3 gap-6 md:grid-rows-1 md:grid-cols-3 md:gap-16'>
                        <a className='flex flex-col items-center group' href='https://x.com/Owen_Edwards30' target='_blank'>
                            <div className='text-6xl transition-colors group-hover:text-main'>
                                <FaXTwitter />
                            </div>
                            <p className='text-2xl font-bold'>Twitter</p>
                            <p className='text-gray-500 font-bold'>Owen_Edwards30</p>
                        </a>
                        <a className='flex flex-col items-center group' href='mailto:owenacedwards@gmail.com' target='_blank'>
                            <div className='text-6xl transition-colors group-hover:text-main'>
                                <FiMail />
                            </div>
                            <p className='text-2xl font-bold'>Email</p>
                            <p className='text-gray-500 font-bold'>owenacedwards@gmail.com</p>
                        </a>
                        <a className='flex flex-col items-center group' href='https://discord.com/' target='_blank'>
                            <div className='text-6xl transition-colors group-hover:text-main'>
                                <FaDiscord />
                            </div>
                            <p className='text-2xl font-bold'>Discord</p>
                            <p className='text-gray-500 font-bold'>goose_yo</p>
                        </a>
                    </div>
                </div>
            </Card>
        </div>
    )
}
