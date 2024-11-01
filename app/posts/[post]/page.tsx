import { allPosts } from '@/.contentlayer/generated'
import Card from '@/components/Card';
import MDXContent from '@/components/MDXContent';
import { notFound } from 'next/navigation';
import React from 'react'

export default function page({ params }: { params: { post: string } }) {
    const post = allPosts.find(post => post._raw.flattenedPath === params.post);

    if (!post?.body.code) notFound();

    return (
        <div className='w-2/3 max-w-5xl mx-auto my-16'>
            <Card>
                <div>
                    <h1 className='text-3xl text-main font-bold'>{post.title}</h1>
                    <h2 className='text-lg font-bold'>{new Date(post.date).toDateString()}</h2>
                    <div className='w-full h-0.5 bg-gray-300 my-2' />
                    <p className='text-lg'>{post.description}</p>
                </div>
            </Card>
            <div className='my-16'>
                <MDXContent code={post.body.code} />
            </div>
        </div>
    )
}
