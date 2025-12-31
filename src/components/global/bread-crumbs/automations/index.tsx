import { ChevronRight, Edit2Icon } from "lucide-react";
import { ActivateAutomationButton } from "../../activate-automation-button";

type Props = {
  id: string;
};

export function AutomationBreadCrumbs({ id }: Props) {
  // WIP : get the automaiton data

  // use mutation stuff to update the automation

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          <p className="text-[#9B9CA0]">THis is the automation title</p>
          <span className="cursor-pointer hover:opacity-75 duration-100 transition ">
            <Edit2Icon size={16} />
          </span>
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
