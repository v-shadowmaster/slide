import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="hidden lg:flex items-center gap-x-2 overflow-hidden bg-secondary border border-border rounded-full px-4 py-1 flex-1">
      <SearchIcon className="h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search by name, email or status"
        className="
          flex-1
          !bg-transparent
          !text-inherit
          border-0
          shadow-none
          outline-none
          focus-visible:ring-0
          focus-visible:ring-offset-0
          placeholder:text-muted-foreground
        "
      />
    </div>
  );
}
