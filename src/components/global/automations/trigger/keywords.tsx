import { Input } from "@/components/ui/input";
import { useKeywords } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useQueryAutomation } from "@/hooks/use-query";
import { X } from "lucide-react";

type Props = {
    id: string
}

export function Keywords({ id }: Props) {
    const { onValueChange, keyword, onKeyPress, onBlur, deleteMutation } = useKeywords(id);
    const { latestVariable } = useMutationDataState(["add-keyword"])
    const { data } = useQueryAutomation(id)


    return <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
        <p className="text-sm text-text-secondary">
            Add words that trigger automations
        </p>
        <div className="flex flex-wrap justify-start gap-2 items-center">

            {data?.data?.keywords && data?.data?.keywords.length > 0 && data?.data?.keywords.map((word) => word.id !== latestVariable.variables.id && (<div key={word.id} className="bg-background-90 flex items-center gap-x-2 capitalize text-tex-secondary py-1 px-4 rounded-full">
                <p>{word.word}</p>
                <X size={20} onClick={() => deleteMutation({ id: word.id })} />
            </div>))}
            {latestVariable && latestVariable.status === "pending" && (
                <div className="bg-background-90 flex items-center gap-x-2 capitalize ">
                    {latestVariable.variables.keyword}
                </div>
            )}
            <Input placeholder="Add keyword..."
                style={{
                    width: Math.min(Math.max(keyword.length || 10, 2), 50) + "ch",
                }}
                value={keyword}
                onChange={onValueChange}
                onKeyUp={onKeyPress}
                onBlur={onBlur}
            />
        </div>
    </div>
}

