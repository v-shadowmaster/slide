"use client"

import { Button } from "@/components/ui/button";
import Loader from "..";
import { Cable } from "lucide-react";
import { useCreateAutomation } from "@/hooks/use-automations";
import { v4 } from "uuid";
import { useMemo } from "react";

export default function CreateAutomation() {

  const mutationId = useMemo(() => v4(), [])
  const { isPending, mutate } = useCreateAutomation(mutationId)



  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medum to-[#1c2d70]" onClick={() => mutate({ name: "Untitled", id: mutationId, createdAt: new Date() })}>
      <Loader state={false}>
        <Cable />
      </Loader>
      create an automation
    </Button>
  );
}
