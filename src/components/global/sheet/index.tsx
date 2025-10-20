import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Props = {
    trigger : React.ReactNode
    children : React.ReactNode
    className?: string
    side : "left" | "right"
}

export default function Sheet({children, trigger , className,side}:Props){
    return <ShadcnSheet>
        <SheetTrigger className={className}>{trigger}</SheetTrigger>
        <SheetContent side={side} className="p-0">{children}</SheetContent>
    </ShadcnSheet>
}