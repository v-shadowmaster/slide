import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type Props = {
    trigger: ReactNode,
    children: ReactNode,
    className?: string
}

export default function PopOver({ trigger, children, className }: Props) {
    return (
        <Popover>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent className={cn("bg-[#1d1d1d] shadow-lg", className)} align="end" side="bottom">{children}</PopoverContent>
        </Popover>
    )
}