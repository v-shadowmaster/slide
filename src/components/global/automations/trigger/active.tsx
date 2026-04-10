import { MessageCircle, Send } from "lucide-react"

type Props = {
    type: string
    keywords: {
        id: string
        word: string
        automationId: string | null
    }[]
}

export default function ActiveTrigger({ keywords, type }: Props) {
    return (
        <div className="bg-secondary border border-border p-4 rounded-xl w-full">
            <div className="flex gap-x-2 items-center text-foreground">
                {type === "COMMENT" ? <MessageCircle className="h-6 w-6" /> : <Send className="h-6 w-6" />}
                <p className="text-lg font-medium">{type === "COMMENT" ? "User comments on my posts" : "User sends me a Direct message"}</p>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{type === "COMMENT" ? "If the user comments on a video that is setup to listen for keywords, this automation will fire" : "If the user send your a message that contains a key on a video that is setup to listen for keywords, this automation will fire"}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
                {keywords.map((word:any)=>(
                    <div key={word.id} className="bg-ig-blue/10 border border-ig-blue/30 flex items-center gap-x-2 capitalize text-ig-blue font-medium py-1 px-4 rounded-full text-sm">
                        <p>{word.word}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
