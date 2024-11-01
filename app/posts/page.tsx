import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link';
import React from 'react'

export default function page() {
    const posts = allPosts;

    return (
        <div className='w-11/12 max-w-5xl mx-auto my-16'>
            <h1 className='text-3xl font-bold mb-8'>Posts</h1>
            <div className='flex flex-col gap-8'>
                {posts.map(post => (
                    <Link key={post._id} href={`/posts/${post._raw.flattenedPath}`}>
                        <p className='text-gray-500'>{new Date(post.date).toLocaleString().slice(0, 10)}</p>
                        <h2 className='text-xl text-main font-bold'>{post.title}</h2>
                        <p className='text-gray-500'>{post.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
