import { getUserPlan } from "@/actions/user/queries";
import PaymentCard from "./payment-card";

export default async function Billing() {
  const plan = (await getUserPlan()) as "FREE" | "PRO";

  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PaymentCard current={plan} label="FREE" />
      <PaymentCard current={plan} label="PRO" />
    </div>
  );
}
