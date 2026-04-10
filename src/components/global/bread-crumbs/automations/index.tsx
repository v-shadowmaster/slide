"use client"

import { ChevronRight, Edit2Icon } from "lucide-react";
import { ActivateAutomationButton } from "../../activate-automation-button";
import { useQueryAutomation } from "@/hooks/use-query";
import { useEditAutomation } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
};

export function AutomationBreadCrumbs({ id }: Props) {
  // WIP : get the automaiton data
  const { data } = useQueryAutomation(id)
  const { edit, enableEdit, disableEdit, inputRef, isPending } = useEditAutomation(id)
  const { latestVariable } = useMutationDataState(["update-automation"])
  // use mutation stuff to update the automation

  return (
    <div className="rounded-xl w-full p-5 bg-secondary border border-border flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-muted-foreground">Automations</p>
        <ChevronRight className="text-muted-foreground h-4 w-4" />
        <span className="flex gap-x-3 items-center">
          {edit ? (<Input ref={inputRef} placeholder={isPending ? latestVariable.variables : "Add a new name"} className="bg-background" />) : (<p className="text-muted-foreground truncate">{latestVariable?.variables ? latestVariable?.variables.name : data?.data?.name}</p>)}
          {edit ? (<></>) : (<span className="cursor-pointer hover:opacity-75 duration-100 transition text-foreground" onClick={enableEdit}>
            <Edit2Icon size={16} />
          </span>)}
        </span>
      </div>
      <div className="flex gap-x-5 items-center">
        <p className="text-muted-foreground text-sm hidden lg:inline">
          All changes saved automatically
        </p>
        <ActivateAutomationButton id={id} />
      </div>
    </div>
  );
}
