"use client";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePath } from "@/hooks/use-nav";
import Sheet from "../sheet";
import { HelpCircleIcon, Menu, Search } from "lucide-react";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import Image from "next/image";
import CreatAutomation from "../create-automation";

type Props = {
    slug: string
}

export default function Navbar({ slug }: Props) {
    const { page } = usePath();
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

    return currentPage && (<div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
            <span className="lg:hidden flex items-center flex-1 gap-x-2">
                <Sheet
                side="right"
                    trigger={<Menu />}
                    className="lg:hidden">
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
                                <UpgradeCard />

                            </div>
                        </SubscriptionPlan>
                    </div>

                </Sheet>

            </span>
            <Search/>
            <CreatAutomation/>
        </div>
    </div>)
}