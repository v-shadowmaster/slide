"use client"

import { Button } from "@/components/ui/button";
import Loader from "..";
import { Zap } from "lucide-react";
import { useCreateAutomation } from "@/hooks/use-automations";
import { v4 } from "uuid";
import { useMemo } from "react";

export default function CreateAutomation() {

  const mutationId = useMemo(() => v4(), [])
  const { isPending, mutate } = useCreateAutomation(mutationId)



  return (
    <Button className="lg:px-10 py-6 bg-ig-blue hover:bg-ig-blue-hover text-white rounded-full font-medium" onClick={() => mutate({ name: "Untitled", id: mutationId, createdAt: new Date(), keywords: [] })}>
      <Loader state={false}>
        <Zap className="h-4 w-4" />
      </Loader>
      Create an Automation
    </Button>
  );
}
