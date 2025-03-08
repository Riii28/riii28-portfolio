'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function Navbar() {
    const [lastScroll, setLastScroll] = useState(0)
    const [isHidden, setIsHidden] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const currentScroll = window.scrollY
            setIsHidden(currentScroll > lastScroll )
            setLastScroll(currentScroll)
            setIsMenuOpen(false)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className={`fixed z-100 left-1/2 bg-transparent backdrop-blur-sm border border-dashed border-dark-200 -translate-x-1/2 w-[95%] max-w-screen-xl shadow-md rounded-xl transition-all duration-300 ${
                isHidden ? "-top-20" : "top-4"
        }`}>
            <div className="flex flex-wrap items-center justify-between mx-auto p-3 md:p-4">
                <Link href={'/'} className="flex items-center">
                    <span className="text-xl font-semibold md:text-2xl">Rii</span>
                    <span className="text-xl font-semibold md:text-2xl text-100">dev</span>
                </Link>
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                >
                    <FontAwesomeIcon
                        size="xl" 
                        icon={faBars}
                    />
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                        <li>
                            <Link href="/" className="block py-2 px-3 hover:bg-dark-200 rounded-md md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 px-3 hover:bg-dark-200 rounded-md md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}