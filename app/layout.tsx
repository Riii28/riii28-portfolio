import '@/styles/App.css'
import { ReactNode } from "react";
import { Poppins } from "next/font/google"
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

const poppins = Poppins({
    weight: ['100', '200', '300', '400'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "My Portfolio",
    icons: {
        icon: '/ridho.jpg'
    },
    description: "Portofolio pribadi yang menampilkan proyek, keterampilan, dan pengalaman saya di dunia pengembangan web.",
    keywords: ["Portfolio", "Web Developer", "Next.js", "React", "Frontend", "Fullstack"],
    authors: [
        { name: 'Ridho Irvan Nurhidayat', }

    ],
    openGraph: {
      title: "My Portfolio",
      description: "Jelajahi proyek-proyek dan pengalaman saya dalam pengembangan web.",
      url: "https://your-portfolio.com",
      type: "website",
      images: [
        {
          url: "/ridho.jpg",
          width: 1200,
          height: 630,
          alt: "Preview of My Portfolio",
        },
      ],
    },
  };
  
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.className} bg-dark-100 text-light-200`}>
                <Navbar />
                { children }
                <ShootingStars starColor="oklch(91.96% 0.1423 122.8)" trailColor="oklch(87.17% 0.0999 131.64)"/>
            <StarsBackground twinkleProbability={0.5} />

            </body>
        </html>
    )
}