'use client'

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function About() {
  const { push, replace } = useRouter()

  const timelineData = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-gray-400 mb-8">
            Di penghujung tahun 2023, rasa penasaran saya terhadap dunia teknologi semakin tumbuh, hingga akhirnya saya memutuskan untuk mulai mendalami pemrograman. Saya memulainya dengan memahami konsep dasar yang menjadi fondasi utama, kemudian melangkah lebih jauh dengan mempelajari HTML, CSS, dan JavaScript—tiga elemen utama dalam pengembangan website.          
          </p>
          <p className="text-gray-400 mb-8">
          Tak berhenti di situ, saya juga mulai mengenal berbagai alat bantu yang sangat berguna dalam proses pengembangan, seperti Git untuk manajemen versi dan kode linting untuk memastikan kualitas kode yang lebih baik. Seiring dengan bertambahnya pemahaman saya, saya mencoba menerapkan ilmu yang saya pelajari dengan membangun berbagai proyek sederhana menggunakan HTML, CSS, dan JavaScript.          </p>
          <p className="text-gray-400 mb-8">
          Berbagai proyek yang saya buat ini tidak hanya membantu saya dalam memahami cara kerja teknologi web, tetapi juga memberi saya pengalaman langsung dalam membangun antarmuka pengguna yang menarik dan interaktif. Beberapa hasil karya awal saya bisa dilihat pada gambar di bawah ini.          </p>
          <CardContainer>
            <CardBody className="relative group/card w-full">
              <CardItem translateZ="100">
                <Image
                  src="/check-khodam.png"
                  alt="Proyek Film Search"
                  width={500}
                  height={500}
                  className="rounded-lg object-contain w-full md:w-full md:h-100 lg:h-130 border-1 border-dashed border-dark-200"
                />
              </CardItem>
            </CardBody>
          </CardContainer>

        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-400 mb-8">
          Mengembangkan berbagai proyek seperti aplikasi pencarian film, notes app, dan mulai belajar Next.js. Selain itu, saya juga berhasil meraih 4 sertifikat dari Dicoding Academy, yang memperkuat pemahaman saya dalam pengembangan web dan teknologi terkait.          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/frontend.jpg"
              alt="Frontend"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-1 border-dashed border-dark-200"
            />
            <Image
              src="/javascript.jpg"
              alt="JavaScript"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-1 border-dashed border-dark-200"
            />
            <Image
              src="/react.jpg"
              alt="React JS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-1 border-dashed border-dark-200"
            />
            <Image
              src="/prinsip-solid.jpg"
              alt="OOP"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full border-1 border-dashed border-dark-200"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-gray-400 mb-8">
            Pada tahun 2025, saya mulai fokus mengembangkan proyek fullstack dengan teknologi modern seperti Next.js untuk frontend, Firestore sebagai database, serta sistem autentikasi yang aman. Selain itu, saya juga mengeksplorasi Laravel untuk membangun backend yang lebih terstruktur dan efisien, memungkinkan saya untuk mengembangkan aplikasi dengan fitur yang lebih kompleks dan skalabilitas yang lebih baik.
          </p>
          <CardContainer>
            <CardBody className="relative group/card w-full">
              <CardItem translateZ="100">
                <Link href={'https://app-notes-v2.vercel.app/'} prefetch={false}>
                  <Image
                    src="/app-notes.png"
                    alt="aplikasi catatan"
                    width={500}
                    height={500}
                    onClick={() => push('/https://app-notes-v2.vercel.app')}
                    className="rounded-lg object-contain w-full md:w-full md:h-100 lg:h-130 border-1 border-dashed border-dark-200"
                  />
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      ),
    },
  ];
  
    return (
    <main className="w-full">
      <Timeline data={timelineData} />
    </main>
  );
}
