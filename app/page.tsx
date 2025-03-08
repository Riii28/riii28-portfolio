'use client'

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TextEffect from "@/components/Text_Effect";
import ProfileCard from "@/components/profile_card";
import TechLists from "@/components/Tech_Lists";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="absolute top-0 left-0 w-full h-full z-50">
                <section className="max-w-screen-xl mx-auto px-4 md:px-6 h-screen ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="h-150 md:h-screen flex flex-col justify-center">
                            <TextEffect />
                            <TextGenerateEffect duration={1} className="text-gray-400 mt-2" words="Seorang yang suka desain modern dan intuitif" /> 
                            <div className="mt-12 flex gap-x-4">
                                <button className="border-dashed border-1 border-dark-200 after:duration-500 hover:border-transparent duration-500 hover:duration-500 relative hover:scale-95 hover:shadow-md cursor-pointer text-light-300 bg-black px-8 py-2 font-bold rounded-md overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-100 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                                    <Link href={'https://github.com/Riii28'} prefetch={false}>Github</Link>
                                </button>
                                <button className="bg-black px-8 py-2 rounded-md font-bold border-dashed border-1 border-dark-200 hover:border-transparent duration-500 shadow-md cursor-pointere hover:scale-95 cursor-pointer">
                                    <Link href={'https://www.linkedin.com/in/ridho-irvan-nurhidayat'} prefetch={false}>LinkedIn</Link>
                                </button>
                            </div>
                            <h1 className="mt-20 text-gray-400">Teknologi dan alat favorit:</h1>
                            <div className="flex gap-x-4 mt-6">
                                <TechLists />
                            </div>
                        </div>
                        <div className="md:h-screen flex flex-col justify-center">
                            <ProfileCard />
                        </div>
                    </div>
                </section>
            </main>
            <span className="hidden md:fixed md:block bottom-10 left-15 text-gray-400 font-bold">@hy.rii28</span>
            <span className="hidden md:fixed md:block bottom-10 right-15 text-gray-400 font-bold">2025</span>
        </>
    )
}