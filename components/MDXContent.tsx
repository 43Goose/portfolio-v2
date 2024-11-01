import clsx from 'clsx'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={clsx(className, 'text-3xl font-bold mb-2')} {...props} />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={clsx(className, 'text-xl font-bold mb-1')} {...props} />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={clsx(className)} {...props} />
    ),
    a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link className={clsx(className, 'text-main hover:underline')} href={href as string} target='_blank' {...props} />
    ),
    Image: ({ className, src, alt }: { className: string, src: string, alt: string }) => (
        <div className='w-full my-4'>
            <Image className={clsx(className, 'w-full min-h-48 max-h-96 rounded-lg overflow-hidden object-cover md:min-h-96 md:max-h-[560px]')} src={src || ''} alt={alt || ''} width={1920} height={1920} />
            <p className='w-max mx-auto text-lg text-gray-500'>{alt}</p>
        </div>
    )
}

export default function MDXContent({ code }: { code: string }) {
    const Component = useMDXComponent(code);

    return (
        <Component components={components} />
    )
}
