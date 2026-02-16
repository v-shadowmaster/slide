import { useListener } from "@/hooks/use-automations";
import TriggerButton from "../trigger-button";

type Props = {
    id: string
}

export default function ThenAction({ id }: Props) {

    const { onSetListener, listener: Listener, onFormSubmit, register, isPending } = useListener(id);
    return (
        <TriggerButton label="Then" >hi</TriggerButton>
    )
}