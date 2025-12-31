import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

type Props = {
  state: boolean;
  classname?: string;
  children: React.ReactNode;
  color?: string;
};

export default function Loader({ children, state, classname, color }: Props) {
  return state ? (
    <div className={cn(classname)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
}
