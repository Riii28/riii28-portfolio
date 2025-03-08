'use client'

import Image from "next/image"

interface Lists {
    title: string
    src: string
}

export default function TechLists() {
    const lists: Lists[] = [
        {
            title: 'Typescript',
            src: '/svg/typescript.svg'
        },
        {   
            title: 'Next JS',
            src: '/svg/nextjs.svg'
        },
        {
            title: 'PHP',
            src: '/svg/php.svg'
        },
        {
            title: 'Laravel',
            src: '/svg/laravel.svg'
        },
        {
            title: 'Tailwind CSS',
            src: '/svg/tailwindcss.svg'
        },
    ]

    return (
        lists.map((list: Lists) => (
            <div key={list.title} className="flex flex-col items-center">
                <Image
                    src={list.src}
                    alt={list.title}
                    width={25}
                    height={25}
                />
                <span className="text-sm text-gray-400 mt-2">{list.title}</span>
            </div>
        ))
    )
}