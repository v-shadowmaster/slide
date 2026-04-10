"use client";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePath } from "@/hooks/use-nav";
import Sheet from "../sheet";
import { HelpCircleIcon, Menu } from "lucide-react";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import CreatAutomation from "../create-automation";
import Search from "../search";
import Notifications from "../notifications";
import MainBreadCrumb from "../bread-crumbs/main-bread-crumb";
import { ThemeToggle } from "../theme-toggle";

type Props = {
  slug: string;
};

export default function Navbar({ slug }: Props) {
  const { page } = usePath();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet side="right" trigger={<Menu className="text-foreground" />} className="lg:hidden">
              <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-sidebar">
                <div className="flex items-center px-4 py-3">
                  <h1 className="text-2xl font-semibold tracking-tight text-foreground">Slide</h1>
                </div>
                <div className="flex flex-col py-1">
                  <Items page={page} slug={slug} />
                </div>
                <div className="px-6">
                  <Separator
                    orientation="horizontal"
                    className="bg-border"
                  />
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
            </Sheet>
          </span>

          <Search />
          <CreatAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page == slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
}
