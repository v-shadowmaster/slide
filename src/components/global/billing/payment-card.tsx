import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheckBigIcon } from "lucide-react";

export default function PaymentCard({
  label,
  current,
  landing,
}: {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
}) {
  return (
    <div
      className={cn(
        label !== current
          ? "border border-border"
          : "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] p-[2px]",
        label === current ? "" : "p-[1px]",
        "rounded-xl overflow-hidden",
      )}
    >
      <div
        className={cn(
          "flex flex-col rounded-xl pl-5 py-5 pr-10 bg-card",
        )}
      >
        {landing ? (
          <h2 className="text-2xl font-semibold text-foreground">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold text-foreground">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
                ? "Downgrade"
                : "Upgrade"}
          </h2>
        )}

        <p className="text-muted-foreground text-sm mb-2">
          This is what your plan covers for automations and AI features
        </p>
        {label === "PRO" ? (
          <span className="bg-gradient-to-r text-3xl from-[#833AB4] via-[#E1306C] font-bold to-[#F77737] bg-clip-text text-transparent">
            {" "}
            Smart AI
          </span>
        ) : (
          <p className="font-bold text-muted-foreground text-lg">Standard</p>
        )}
        {label === "PRO" ? (
          <p className="mb-2 text-foreground">
            <b className="text-xl">$99.99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2 text-foreground">Free</p>
        )}

        {PLANS[label === "PRO" ? 1 : 0].features.map((i) => (
          <p key={i} className="mt-2 text-muted-foreground flex gap-4 items-start">
            <CircleCheckBigIcon className="text-ig-blue h-5 w-5 shrink-0" /> {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5",
              label === "PRO"
                ? "bg-gradient-to-r from-[#833AB4] text-white via-[#E1306C] to-[#F77737]"
                : "bg-secondary text-foreground border border-border hover:bg-accent",
            )}
          >
            {label === current
              ? "Get Started"
              : current === "PRO"
                ? "Free"
                : "Get Started"}
          </Button>
        ) : (
          <Button
            className="rounded-full mt-5 bg-ig-blue hover:bg-ig-blue-hover text-white"
            disabled={label === current}
          >
            {label === current
              ? "Active"
              : current === "PRO"
                ? "Downgrade"
                : "Upgrade"}{" "}
          </Button>
        )}
      </div>
    </div>
  );
}
