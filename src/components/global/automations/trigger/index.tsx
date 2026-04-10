"use client"
import { useQueryAutomation } from "@/hooks/use-query";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";
import ThenAction from "../then/then-action";
import TriggerButton from "../trigger-button";
import { AUTOMATION_TRIGGERS } from "@/constants/automation";
import { useTriggers } from "@/hooks/use-automations";
import { cn } from "@/lib/utils";
import { Keywords } from "./keywords";
import { Button } from "@/components/ui/button";
import Loader from "../..";

type Props = {
  id: string;
};

export function Trigger({ id }: Props) {
  const { types, onSetTrigger, onSaveTrigger, isPending } = useTriggers(id);
  const { data } = useQueryAutomation(id)
  if (data?.data && data?.data?.trigger.length > 0) {
    return <div className="flex flex-col ga-y-6 items-center">
      <ActiveTrigger type={data.data.trigger[0].type} keywords={data.data.keywords} />

      {data?.data?.trigger.length > 1 && <>
        <div className="relative w-6/12 mt-4">
          <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 text-muted-foreground bg-background">or</p>
          <Separator orientation="horizontal" className="border-border border-[1px]" />
        </div>
        <ActiveTrigger type={data.data.trigger[1].type} keywords={data.data.keywords} />
      </>}


      {!data.data.listener && <ThenAction id={id} />}

    </div>
  }

  return <TriggerButton label="Add Trigger">
    <div className="flex flex-col gap-y-2">{AUTOMATION_TRIGGERS.map((trigger) => (
      <div key={trigger.id} onClick={() => onSetTrigger(trigger.type)}
        className={cn(
          "rounded-xl flex cursor-pointer flex-col p-3 gap-y-2 transition-colors",
          !types?.find((t) => t === trigger.type ? "bg-accent" : "bg-ig-blue text-white")
        )}>
        <div className="flex gap-x-2 items-center text-foreground">{trigger.icon}
          <p className="font-bold">{trigger.label}</p>
        </div>
        <p className="text-sm font-light text-muted-foreground">{trigger.description}</p>
      </div>
    ))}
      <Keywords id={id} />
      <Button
        onClick={onSaveTrigger}
        disabled={types?.length === 0}
        className="bg-ig-blue hover:bg-ig-blue-hover font-medium text-white"
      >
        <Loader state={isPending} > Create Trigger</Loader>

      </Button>
    </div>
  </TriggerButton>

}
