import { getAutomationInfo } from "@/actions/automations";
import PostNode from "@/components/global/automations/post/node";
import { Trigger } from "@/components/global/automations/trigger";
import { ThenNode } from "@/components/global/automations/then/node";
import { AutomationBreadCrumbs } from "@/components/global/bread-crumbs/automations";
import { PrefetchUserAutomation } from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { AlertTriangle } from "lucide-react";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const info = await getAutomationInfo(id)
    return {
        title: info.data?.name
    }
}

export default async function Page({ params }: Props) {

    const { id } = await params;

    const query = new QueryClient()
    await PrefetchUserAutomation(query, id)
    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div>
                <AutomationBreadCrumbs id={id} />
                <div className="flex flex-col items-center gap-y-3">
                    <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-card border border-border gap-y-3 mt-5">
                        <div className="flex gap-x-2 items-center text-foreground">
                            <AlertTriangle className="h-5 w-5" />
                            <span className="font-medium">When...</span>
                        </div>

                        <Trigger id={id} />
                    </div>

                    <ThenNode id={id} />
                    <PostNode id={id} />
                </div>
            </div>

        </HydrationBoundary>
    );
}
