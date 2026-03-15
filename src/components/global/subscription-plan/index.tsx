import { useQueryUser } from "@/hooks/use-query";

type Props = {
  type: "FREE" | "PRO";
  children: React.ReactNode;
};

export default function SubscriptionPlan({ children, type }: Props) {

  const { data } = useQueryUser()

  return data?.data?.subscription?.plan === type && children;
}
