import { Bot, PlaneLandingIcon } from "lucide-react"
import type { ReactNode } from "react"
import { v4 } from "uuid"

export type AutomationListenerProps = {
    id: string
    label: string
    icon: ReactNode
    description: string
    type: "SMARTAI" | "MESSAGE"
}

export type AutomationTriggerProps = {
    id : string
    label: string
    icon: ReactNode
    description: string
    type:"COMMENT" | "DM"
}

export const AUTOMATION_TRIGGERS: AutomationTriggerProps[] = [
    {
        id: v4(),
        label: "User comments on my post",
        icon: <PlaneLandingIcon size={36} color="blue" />,
        description: "Select if you want to automate comments on your profile",
        type: "COMMENT"

    },
    {
        id: v4(),
        label: "Send me a dm with a keyword",
        icon: <Bot size={36} color="blue" />,
        description: "Select if you want to automate DM on your profile",
        type: "DM",

    }
]

export const AUTOMATION_LISTENERS: AutomationListenerProps [] = [
    {
        id: v4(),
        label: "send user the message", 
        icon: <PlaneLandingIcon size={36} color="blue" />,
        description: "Enter the message that you want to be sent to the client",
        type : "MESSAGE"
        
    },
    {
        id: v4(),
        label: "let smart ai take over ",
        icon: <Bot size={36} color="blue" />,
        description: "tell AI about your project . (Upgrade to use this feature",
        type: "SMARTAI",

    }
]