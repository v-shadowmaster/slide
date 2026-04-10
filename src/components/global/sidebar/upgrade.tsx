import PaymentButton from "../payment-button";

export default function UpgradeCard() {
  return (
    <div className="bg-secondary border border-border p-4 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm text-foreground">
        Upgrade to
        <span className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] font-bold bg-clip-text text-transparent">
          {" "}
          Smart AI
        </span>
      </span>
      <p className="text-muted-foreground font-light text-sm">
        Unlock all features <br /> including AI and more
      </p>
      <PaymentButton />
    </div>
  );
}
