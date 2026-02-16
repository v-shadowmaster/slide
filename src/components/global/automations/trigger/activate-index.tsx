import { Instagram, Twitter } from "lucide-react";
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
    return <div className="bg-background-80 p-3 rounded-xl w-full">
        <div className="flex gap-x-2 items-center">
            {type === "COMMENT" ? <Instagram size={28} /> : <Twitter size={28} />}
            <p className="text-lg">{type === "COMMENT" ? "User comments on my post" : "User sends me a direct message"}</p>
        </div>
        <p className="text-text-secondary">
            {type === "COMMENT" ? "If the user comments on a video that is setup to listen for keywords , this automation will fire" : "If the user sends you a message that a keyword this automation will fire , this automation will fire"}
        </p>
    </div>
}


export default ActivateTrigger