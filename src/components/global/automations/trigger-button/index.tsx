import React from "react"
import PopOver from "../../pop-over"
import { Plus } from "lucide-react"


type Props = {
    children: React.ReactNode
    label: string
}

export default function TriggerButton({ children, label }: Props) {
    return <PopOver className="w-[400px]" trigger={<div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5"><Plus color="white" size={32} /><p>Then</p></div>}>
        {children}
    </PopOver>
}