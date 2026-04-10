"use client";

import React from "react";
import { usePath } from "@/hooks/use-nav";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpCircleIcon } from "lucide-react";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "./upgrade";
import { ThemeToggle } from "../theme-toggle";

type Props = {
  slug: string;
};

export default function Sidebar({ slug }: Props) {
  const { page } = usePath();
  return (
    <div
      className="w-[250px] border-r border-sidebar-border bg-sidebar fixed left-0 lg:inline-block hidden bottom-0 top-0 overflow-hidden"
    >
      <div className="flex flex-col gap-y-5 w-full h-full px-3 py-4">
        <div className="flex items-center px-4 py-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Slide</h1>
        </div>
        <div className="flex flex-col py-1">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-6">
          <Separator orientation="horizontal" className="bg-border" />
        </div>
        <div className="px-3 flex flex-col gap-y-4">
          <div className="flex gap-x-3 items-center">
            <ClerkAuthState />
            <p className="text-muted-foreground text-sm">Profile</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <HelpCircleIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Help</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <ThemeToggle />
            <p className="text-muted-foreground text-sm">Theme</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
}
