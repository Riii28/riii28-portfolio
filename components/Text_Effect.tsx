'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { variants } from "@/lib/transitions"

export default function TextEffect() {
    const [text, setText] = useState<string>('')
    const texts: string[] = ['Frontend Developer', 'Tech Enthusiast', 'Typescript Lover']

    useEffect(() => {
        let index: number = 0
        const interval: any = setInterval(() => {
            setText(texts[index])
            index = (index + 1) % texts.length
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            key={text}
            variants={variants.textEffect}
            initial='initial'
            animate='animate'   
            className="mt-8"     
        >
            <span className="text-2xl md:text-4xl font-bold">{text}</span>
        </motion.div>
    )
}