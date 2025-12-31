import { Button } from "@/components/ui/button";
import { Loader } from "../Loader";
import { Bot } from "lucide-react";

type Props = {};

export function ActivateAutomationButton() {
  // WIP : setup optimistic ui
  // fetch automation data

  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] m-x-4">
      <Loader loading={false} />
      <Bot />

      <p className="lg:inline hidden">Activate</p>
    </Button>
  );
}
