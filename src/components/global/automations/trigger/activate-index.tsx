import { Instagram, Send } from "lucide-react";
import React from "react";

type Props = {
    type: string
    keywords: {
        id: string
        word: string
        automationId: string | null
    }[]
}

const ActivateTrigger = ({ keywords, type }: Props) => {
    return <div className="bg-secondary border border-border p-4 rounded-xl w-full">
        <div className="flex gap-x-2 items-center text-foreground">
            {type === "COMMENT" ? <Instagram className="h-6 w-6" /> : <Send className="h-6 w-6" />}
            <p className="text-lg font-medium">{type === "COMMENT" ? "User comments on my post" : "User sends me a direct message"}</p>
        </div>
        <p className="text-muted-foreground text-sm mt-1">
            {type === "COMMENT" ? "If the user comments on a video that is setup to listen for keywords , this automation will fire" : "If the user sends you a message that a keyword this automation will fire , this automation will fire"}
        </p>
    </div>
}


export default ActivateTrigger
