"use client";

import { usePath } from "@/hooks/use-nav";
import { cn, getMonth } from "@/lib/utils";
import Link from "next/link";
import { GradientButton } from "../gradient-button";
import { Button } from "@/components/ui/button";
import { useQueryAutomations } from "@/hooks/use-query";
import CreateAutomation from "../create-automation";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useMemo } from "react";

export function AutomationList() {

  const { data } = useQueryAutomations()
  const { latestVariable } = useMutationDataState(["create-automation"])
  const { pathName } = usePath();

  // useMemo must be called before any early returns (Rules of Hooks)
  const optimizedUiData = useMemo(() => {
    if (data?.status !== 200 || !data?.data) {
      return { data: [] }
    }
    if (latestVariable?.variables) {
      const test = [latestVariable.variables, ...data.data]
      return { data: test }
    }
    return data
  }, [latestVariable, data])

  if (data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3">
        <h3 className="text-lg text-muted-foreground">No automations</h3>
        <CreateAutomation />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-3">
      {optimizedUiData.data.map((automation) => (
        <Link
          href={`${pathName}/${automation.id}`}
          key={automation.id}
          className="bg-card hover:bg-accent/50 transition duration-100 rounded-xl p-5 border border-border flex"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold text-foreground">{automation.name}</h2>
            <p className="text-muted-foreground text-sm font-light mb-2">
              This is from the comment
            </p>

            {automation.keywords.length > 0 ? (<div className="flex gap-x-2 flex-wrap mt-3">
              <div
                className={cn(
                  "rounded-full px-4 py-1 capitalize",
                  (0 + 1) % 0 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                )}
              >
                getstated
              </div>
            </div>) : (
              <div className="rounded-full border-2 mt-3 border-dashed border-muted-foreground/40 px-3 py-1">
                <p className="text-sm text-muted-foreground">No keywords</p>
              </div>
            )}

          </div>
          <div className="flex flex-col justify-between">
            <p className="capitalize text-sm font-light text-muted-foreground">
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{" "}
              {automation.createdAt.getUTCDate() === 1 ? `${automation.createdAt.getUTCDate()}st` : `${automation.createdAt.getUTCDate()}th`} {" "} {automation.createdAt.getUTCFullYear()}
            </p>
            {automation.listener?.listener === "SMARTAI" ? (<GradientButton
              type="BUTTON"
              className="w-full bg-card text-foreground hover:bg-card"
            >
              Smart AI
            </GradientButton>) :
              (<Button variant="secondary" className="text-foreground border border-border">
                Standard
              </Button>)}

          </div>
        </Link>))}
    </div>
  );
}
