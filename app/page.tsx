"use client";
import React from "react";
import Image from "next/image";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#121212] text-white"> 
      {/* ^ Added bg-[#121212]*/}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Kartik Bhaba</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">Portfolio Under Development.</li>
          <li>Coming Soon (PreDep)</li>
          <li>In the meantime, reach out at:</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* LinkedIn Button */}
          <HoverBorderGradient as="a" href="https://www.linkedin.com/in/kartik-bhaba-0251181b1" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center">
              <Image
                aria-hidden
                src="/linkedin3.png"
                alt="LinkedIn logo"
                width={30}
                height={20}
                className="mr-3"
              />
              Connect on LinkedIn
            </div>
          </HoverBorderGradient>

          {/* Email Button */}
          <HoverBorderGradient as="a" href="mailto:kartik.bhaba16@gmail.com">
            Email Me
           </HoverBorderGradient>


          {/* Resumé Button */}
          <HoverBorderGradient as="a" href="/KB_resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resumé
          </HoverBorderGradient>
        </div>
      </main>
    </div>
  


);
}
