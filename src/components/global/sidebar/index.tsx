'use client';

import React from "react";
import { usePath } from "@/hooks/use-nav";
import Image from "next/image";

type Props = {
  slug: string;
};

export default function Sidebar({ slug }: Props) {
  const { page } = usePath(); // OK to use if your hook returns something

  return (
    <aside
      className={
        `w-64 fixed left-0 top-0 bottom-0 m-4 rounded-3xl overflow-hidden border-[1px] ` +
        `border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#1A1A1A] to-[#768BDD]` 
      }
      aria-label="Site sidebar"
    >
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opactiy-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center"><Image src="/next.svg" alt="logo" width={150} height={150}/></div>
        {/* Add navigation items here */}
        
      </div>
    </aside>
  );
}
