"use client"
import { useQueryAutomation } from "@/hooks/use-query";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";
import ThenAction from "../then/then-action";

type Props = {
  id: string;
};

export function Trigger({ id }: Props) {
  const { data } = useQueryAutomation(id)
  if (data?.data && data?.data?.trigger.length >= 0) {
    return <div className="flex flex-col ga-y-6 items-center">
      <ActiveTrigger type={"COMMEN"} keywords={[{
        id: "asdf",
        word: "getStarted",
        automationId: id
      }]} />

      {/** WIP : add data.data.trigger  */}

      <>
        <div className="relative w-6/12 mt-4">
          <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">or</p>
          <Separator orientation="horizontal" className="border-muted border-[1px]" />
        </div>
        <ActiveTrigger type="MESSAGE" keywords={[{
        id: "asdf",
        word: "MePlease",
        automationId: id
      }]}/>
      </>

      <ThenAction id={id}/>
    </div>
  }
}
