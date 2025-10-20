'use client';

import React from 'react';
import { usePath } from '@/hooks/use-nav';
import Image from 'next/image';
import Items from './items';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { HelpCircleIcon } from 'lucide-react';
import SubscriptionPlan from '../subscription-plan';
import UpgradeCard from './upgrade';

type Props = {
  slug: string;
};

export default function Sidebar({ slug }: Props) {
  const { page } = usePath();
  return (
    <div
      className={
        `w-[250px] border-[1px]  raidal fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#1A1A1A] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden`
      }
    >
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opactiy-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <Image src="/next.svg" alt="logo" width={150} height={150} />
        </div>
        <div className='flex flex-col py-3'>
          <Items page={page} slug={slug} />
        </div>
        <div className='px-16'>
          <Separator orientation='horizontal' className='bg-[#5c5c5f]' />
        </div>
        <div className='px-3 flex flex-col gap-y-5'>
          <div className='flex gap-x-2'>
            <ClerkAuthState />
            <p className='text-[#9b9ca0]'>Profile</p>
          </div>

          <div className='flex gap-x-2'>
            <HelpCircleIcon />
            <p className='text-[#9b9ca0]'>help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className='flex-1 flex flex-col justify-end'>
            <UpgradeCard/>

          </div>
        </SubscriptionPlan>
      </div>

    </div>
  );
}
