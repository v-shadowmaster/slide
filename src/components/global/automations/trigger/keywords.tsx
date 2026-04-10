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


    return <div className="bg-secondary border border-border flex flex-col gap-y-3 p-3 rounded-xl">
        <p className="text-sm text-muted-foreground">
            Add words that trigger automations
        </p>
        <div className="flex flex-wrap justify-start gap-2 items-center">

            {data?.data?.keywords && data?.data?.keywords.length > 0 && data?.data?.keywords.map((word) => word.id !== latestVariable.variables.id && (<div key={word.id} className="bg-accent flex items-center gap-x-2 capitalize text-foreground py-1 px-4 rounded-full text-sm">
                <p>{word.word}</p>
                <X size={16} className="cursor-pointer hover:text-ig-red transition-colors" onClick={() => deleteMutation({ id: word.id })} />
            </div>))}
            {latestVariable && latestVariable.status === "pending" && (
                <div className="bg-accent flex items-center gap-x-2 capitalize text-muted-foreground py-1 px-4 rounded-full text-sm">
                    {latestVariable.variables.keyword}
                </div>
            )}
            <Input placeholder="Add keyword..."
                style={{
                    width: Math.min(Math.max(keyword.length || 10, 2), 50) + "ch",
                }}
                value={keyword}
                className="bg-background border-border"
                onChange={onValueChange}
                onKeyUp={onKeyPress}
                onBlur={onBlur}
            />
        </div>
    </div>
}
