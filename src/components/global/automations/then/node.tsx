"use client"
import { Separator } from "@/components/ui/separator"
import { useQueryAutomation } from "@/hooks/use-query"
import { BotIcon, MessageSquare, MessageCircle } from "lucide-react"
import PostButton from "../post"

type Props = {
    id: string
}

export function ThenNode({ id }: Props) {
    const { data } = useQueryAutomation(id)

    const commentTrigger = data?.data?.trigger.find((t) => t.type === "COMMENT")

    return !data?.data?.listener ? <></> : (<div className="w-full lg:w-10/12 relative xl:w-6/12 p-5 rounded-xl flex flex-col bg-card border border-border gap-y-3">
        <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50">
            <span className="h-[9px] w-[9px] bg-connector/50 rounded-full" />
            <Separator orientation="vertical" className="bottom-full flex-1 border-[1px] border-connector/50" />
            <span className="h-[9px] w-[9px] bg-connector/50 rounded-full" />
        </div>
        <div className="flex gap-x-2 items-center text-foreground">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Then...</span>
        </div>
        <div className="bg-secondary border border-border p-3 rounded-xl flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center text-foreground">
                {data.data.listener.listener === "MESSAGE" ? <MessageSquare className="h-5 w-5" /> : <BotIcon className="h-5 w-5" />}
                <p className="font-bold text-lg"> {data.data.listener.listener === "MESSAGE" ? "Send the user a message" : "Let Smart AI take over"} </p>
            </div>
            <p className="font-light text-muted-foreground">{data.data.posts.length > 0 ? (<></>) : commentTrigger ? (<PostButton id={ id} />):(<>  </>)}</p>
       </div>
    </div>)

}
