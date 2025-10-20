import { Cable, HomeIcon, RocketIcon, SettingsIcon } from "lucide-react";
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
        icon : <HomeIcon />
    },
     {
        id : uuid(),
        label : "automations",
        icon : <Cable />
    },
     {
        id : uuid(),
        label : "integrations",
        icon : <RocketIcon />
    },
     {
        id : uuid(),
        label : "settings",
        icon : <SettingsIcon />
    },
]