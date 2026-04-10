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
        const isActive =
          page === item.label || (page === slug && item.label === "home");

        return (
          <Link
            key={item.id}
            href={href}
            className={cn(
              "capitalize flex items-center gap-x-3 rounded-xl px-4 py-3 text-sm transition-colors",
              isActive
                ? "bg-accent font-semibold text-foreground"
                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}
