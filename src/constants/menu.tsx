import { Home, Zap, Link2, Settings } from "lucide-react";
import {v4 as uuid} from "uuid";
type fieldProps = {
    label : string
    id : string
}

type sideBarProps = {
    icon : React.ReactNode
} & fieldProps

export const SIDEBAR_MENU : sideBarProps[] = [
    {
        id : uuid(),
        label : "home",
        icon : <Home className="h-5 w-5" />
    },
     {
        id : uuid(),
        label : "automations",
        icon : <Zap className="h-5 w-5" />
    },
     {
        id : uuid(),
        label : "integrations",
        icon : <Link2 className="h-5 w-5" />
    },
     {
        id : uuid(),
        label : "settings",
        icon : <Settings className="h-5 w-5" />
    },
]
