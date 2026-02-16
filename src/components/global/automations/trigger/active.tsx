import { ArrowBigLeft, ArrowBigRight, MessageCircle } from "lucide-react"

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
        <div className="bg-background-80 p-3 rounded-xl w-full">
            <div className="flex gap-x-2 items-center">{type === "COMMENT" ? <MessageCircle size={32} color="white" /> : <ArrowBigRight size={32} color="white" />}</div>
            <p className="text-lg">{type === "COMMENT" ? "User comments on my posts " : "User sends me a Direct message"}</p>
            <p className="text-text-secondary">{type === "COMMENT" ? "If the user comments on a video that is setup to listen for keywords, this automation will fire" : "If the user send your a message that contains a key on a video that is setup to listen for keywords, this automation will fire"}</p>
            <div className="flex gap-2 mt-5 flex-wrap">
                {keywords.map((word:any)=>(
                    <div key={word.id} className="bg-gradient-to-br from-[#3352CC] to-[#1C2D70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full">
                        <p>{word.word}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
