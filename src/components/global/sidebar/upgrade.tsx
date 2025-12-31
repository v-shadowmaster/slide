import PaymentButton from "../payment-button";

export default function UpgradeCard() {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to
        {""}
        <span className="bg-gradient-to-r from-[#cc3bd4] to-[#d064ac] font-bold bg-clip-text text-transparent">
          {" "}
          Smart AI
        </span>
      </span>
      <p className="text-[#9b9ca0] font-light text-sm">
        Unlock all features <br /> including AI and more
      </p>
      <PaymentButton />
    </div>
  );
}
