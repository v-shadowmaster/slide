import { useListener } from "@/hooks/use-automations";
import TriggerButton from "../trigger-button";
import { AUTOMATION_LISTENERS } from "@/constants/automation";
import SubscriptionPlan from "../../subscription-plan";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loader from "../..";

type Props = {
    id: string
}

export default function ThenAction({ id }: Props) {

    const { onSetListener, listener: Listener, onFormSubmit, register, isPending } = useListener(id);
    return (
        <TriggerButton label="Then" ><div className="flex flex-col gap-y-2">{
            AUTOMATION_LISTENERS.map((listener) => listener.type === "SMARTAI" ?
                <SubscriptionPlan key={listener.type} type="PRO">
                    <div onClick={() => onSetListener(listener.type)} key={listener.id} className={cn(
                        Listener === listener.type ?
                            "bg-ig-blue text-white" : "bg-secondary border border-border",
                        "p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100"
                    )}>
                        <div className="flex gap-x-2 items-center">
                            {listener.icon}
                            <p className="font-medium">{ listener.label}</p>
                        </div>
                        <p className="text-sm">{listener.description}</p>
                    </div>
                </SubscriptionPlan>
                : (<div onClick={() => onSetListener(listener.type)} key={listener.id} className={cn(
                    Listener === listener.type ?
                        "bg-ig-blue text-white" : "bg-secondary border border-border text-foreground",
                    "p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100"
                )}>
                    <div className="flex gap-x-2 items-center">
                        {listener.icon}
                        <p className="font-medium">{listener.label}</p>
                    </div>
                    <p className="text-sm text-inherit/70">{listener.description}</p>
                </div> ))
        }

            <form onSubmit={onFormSubmit} className="flex flex-col gap-y-2">
                <Textarea placeholder={Listener === "SMARTAI" ? "Add a prompt that your smart ai can use..." : "Add a message you want send to your customers"} {...register("prompt")} className="bg-secondary border-border outline-none ring-0 focus:ring-0" />
                <Button className="bg-ig-blue hover:bg-ig-blue-hover w-full font-medium text-white">
                    <Loader state={ isPending}> Add listener</Loader>
                </Button>
        </form>
        </div></TriggerButton>
    )
}
