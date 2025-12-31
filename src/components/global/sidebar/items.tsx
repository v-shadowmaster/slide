import { SIDEBAR_MENU } from "@/constants/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  page: string;
  slug: string;
};

export default function Items({ page, slug }: Props) {
  return (
    <>
      {SIDEBAR_MENU.map((item) => {
        const href = `/dashboard/${slug}${item.label === "home" ? "" : `/${item.label}`}`;

        return (
          <Link
            key={item.id}
            href={href}
            className={cn(
              "capitalize flex items-center  gap-x-2 rounded-full p-3",
              page === item.label && "bg-[#171717]",
              // if you want home when page===slug, do that as separate condition:
              page === slug && item.label === "home"
                ? "bg-[#121212]"
                : "text-[#9b9ca0]",
            )}
          >
            {item.icon}
            <span className="min-w-[1px]">{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}
