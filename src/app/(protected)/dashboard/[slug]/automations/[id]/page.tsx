import { Trigger } from "@/components/global/automations/trigger";
import { AutomationBreadCrumbs } from "@/components/global/bread-crumbs/automations";
import { FileWarning } from "lucide-react";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;
    return (
        <div>
            <AutomationBreadCrumbs id={id} />
            <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
                <div className="flex gap-x-2">
                    <FileWarning /> when...
                </div>

                <Trigger id={id} />
            </div>
        </div>
    );
}
