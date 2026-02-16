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
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          {edit ? (<Input ref={inputRef} placeholder={isPending ? latestVariable.variables : "Add a new name"} />) : (<p className="text-[#9B9CA0] truncate">{latestVariable?.variables ? latestVariable?.variables.name : data?.data?.name}</p>)}
          {edit ? (<></>) : (<span className="cursor-pointer hover:opacity-75 duration-100 transition" onClick={enableEdit}>
            <Edit2Icon size={16} />
          </span>)}
        </span>
      </div>
      <div className="flex gap-x-5">
        <p className="text-text-secondary text-sm">
          All things are saved automatically{" "}
        </p>
        <div className="flex gap-x-5">
          <p className="text-text-secondary text-sm">changes saved </p>
        </div>
        <ActivateAutomationButton />
      </div>
    </div>
  );
}
