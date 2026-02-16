import { getAutomationInfo } from "@/actions/automations";
import { Trigger } from "@/components/global/automations/trigger";
import { AutomationBreadCrumbs } from "@/components/global/bread-crumbs/automations";
import { PrefetchUserAutomation } from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FileWarning } from "lucide-react";

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
                <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
                    <div className="flex gap-x-2">
                        <FileWarning /> when...
                    </div>

                    <Trigger id={id} />
                </div>
            </div>

        </HydrationBoundary>
    );
}
