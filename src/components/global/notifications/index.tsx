import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-accent">
      <Bell className="h-5 w-5 text-foreground" />
    </Button>
  );
}
