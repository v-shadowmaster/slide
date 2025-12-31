import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="hidden lg:flex items-center gap-x-2 overflow-hidden border-2 border-[#3352cc] rounded-full px-4 py-1 flex-1">
      <SearchIcon color="#3352cc" />
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
          placeholder:text-grey
        "
      />
    </div>
  );
}
