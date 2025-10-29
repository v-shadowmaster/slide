import { BotMessageSquareIcon, ContactRound, HomeIcon, LucideRocket, SettingsIcon } from "lucide-react"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
]

export const PAGE_ICON: { [page in string]: React.ReactNode } = {
    AUTOMATIONS: <BotMessageSquareIcon />,
    CONTACTS: <ContactRound />,
    INTEGRATIONS: <LucideRocket />,
    SETTINGS: <SettingsIcon />,
    HOME: <HomeIcon />
}

export const PLANS = [
    {
        name: "Free Plan",
        description: "Perfect for getting started",
        price: '$0',
        features: [
            "Boost engagement with target response",
            "Automate comment replies to enhances audience interaction",
            'Turn followers into customers with targeted messaging'
        ],
        cta: "Get Started",
    },
    {
        name: "Smart AI Plan",
        description: "Advanced features for power users",
        price: '$99',
        features: [
            "All features for power users",
            "AI-powered response generation",
            'Advanced analytics and insights',
            "Priority customer support",
            "Custom branding options"
        ],
        cta: "Upgrade Now",
    }
]