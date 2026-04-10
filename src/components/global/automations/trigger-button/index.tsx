import React from "react"
import PopOver from "../../pop-over"
import { Plus } from "lucide-react"


type Props = {
    children: React.ReactNode
    label: string
}

export default function TriggerButton({ children, label }: Props) {
    return <PopOver className="w-[400px]" trigger={<div className="border-2 border-dashed w-full border-ig-blue/50 hover:border-ig-blue hover:bg-ig-blue/5 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 text-foreground"><Plus className="h-5 w-5 text-ig-blue" /><p className="text-ig-blue font-medium">{label}</p></div>}>
        {children}
    </PopOver>
}
