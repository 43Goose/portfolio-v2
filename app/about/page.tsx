import React from 'react'

export default function page() {
    const storyEntries = [
        { title: 'How Everything Started', content: 'Going into high school I started taking an interest in basic scripting for ARMA 3, a game my friends and I invested a ton of time into. This eventually sparked an interest in C++ and C# programming to make small video games. One year I joined a class to learn how to develop games and thoroughly enjoyed it. Throughout high school I pursued game development; I eventually grew tired of it, however, due to the amount of time you have to invest into one project.' },
        { title: 'Why Web?', content: 'After graduating high school in 2020, I didn\'t quite know what I wanted to do. Bored out of my mind and looking for something new; I decided to get back into programming once a friend of mine suggested I try web development. I debated getting a degree in computer science, but because of a lack of funds and high school calculus, I instead started by working on certificates from FreeCodeCamp. My existing programming experience allowed me to get through them with relative ease. Throughout this time I have really come to enjoy web development and I\'m glad I made the decision to get into it.' },
        { title: 'How it\'s Going', content: 'Throughout the past couple of years, I\'ve worked on building more experience by creating personal projects as well as some websites for local businesses. I have got to a point where I am now looking for employment, however, due to the current market for developers this has proven quite difficult. I remain hopeful and in the meantime want to stay focused on strengthening my portfolio as well as gaining work experience through freelancing.' },
        { title: 'And Beyond', content: 'I hope to eventually be able to make this my career and eagerly await the opportunity to get my foot in the door. Until then if you like my work feel free to support me by sharing my work and by giving any of my repositories on Github a star!' },
    ]

    return (
        <div className='w-11/12 max-w-5xl flex flex-col gap-16 mx-auto my-16'>
            <section id='about-me'>
                <h1 className='text-3xl font-bold mb-8'>About me</h1>
                <div className='flex flex-col gap-8 text-lg'>
                    <p>{"I'm a self-taught full-stack web and software developer; programming since I was 13 years old. I take pride in the finer details and overall quality of my work. I have proficient knowledge in a multitude of frameworks and languages, specializing in React and NodeJS libraries. I am always striving to learn new skills and refine existing ones. For the last two years I have worked as a freelence full-stack developer creating websites and systems for local businessess."}</p>
                    <p>{"I beleive in "}<strong>{"speed"}</strong>{". Modern applications have to be fast and intuitive in order to keep users interested and wanting to come back. There's no denying the average person is busier than ever and because of that our attention spans are shrinking significantly. If a website is slow or poorly designed the user will get frusturated or disinterested and quickly find something else to invest their time in. This is why it is vital that your UI and UX are fast and modern."}</p>
                    <p>{"As a developer one thing I always try to keep in mind is never be afraid to "}<strong>{"reinvent the wheel"}</strong>{". In this industry where seemingly everything has a tool or library already created by someone else; it is important not to give in to the urge to \"npm install\" and instead think of whether you have the time to try to do it yourself. There are multiple reasons why this is great: for one, it keeps your programming and problem solving skills from deteriorating or falling behind; also, it saves your projects from piling up expensive libraries causing slow performance poor SEO; lastly, preventive maintenance from large libraries containing bugs or no longer receiving updates. If you have the time, don't be afraid to challenge yourself."}</p>
                </div>
            </section>
            <section id='story'>
                <h1 className='text-3xl font-bold mb-8'>Story</h1>
                <div className='flex flex-col'>
                    {storyEntries.map((e, i) => (
                        <div
                            key={i}
                            className='relative flex flex-col py-6 border-t-2 odd:border-r-2 odd:pr-6 even:border-l-2 even:pl-6 story'
                        >
                            <h2 className='text-xl font-bold'>{e.title}</h2>
                            <p>{e.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
