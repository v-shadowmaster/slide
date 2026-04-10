import { AutomationList } from "@/components/global/automation-list";
import CreatAutomation from "@/components/global/create-automation";
import { Check } from "lucide-react";

export default function Page() {
    //WIP : connect real automaitons list
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="lg-col-apsn-4">
                <AutomationList />
            </div>
            <div className="lg:col-span-2">
                <div className="flex flex-col rounded-xl bg-card gap-y-6 p-5 border border-border">
                    <div>
                        <h2 className="text-xl font-semibold text-foreground">Automations</h2>
                        <p className="text-muted-foreground text-sm">
                            Your live automations will show here
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-3">
                            {[1, 2, 3].map((item) => (
                                <div className="flex items-start justify-between" key={item}>
                                    <div className="flex flex-col">
                                        <h3 className="font-medium text-foreground">
                                            Direct traffic towards website
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            October 5th 2024
                                        </p>
                                    </div>
                                    <Check className="text-ig-blue h-5 w-5" />
                                </div>
                            ))}
                        </div>
                        <CreatAutomation />
                    </div>
                </div>
            </div>
        </div>
    );
}
