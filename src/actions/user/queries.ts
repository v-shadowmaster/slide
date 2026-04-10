"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const getUserPlan = async () => {
    const user = await currentUser()
    if (!user) return null
    const data = await client.user.findUnique({
        where: { clerkId: user.id },
        select: { subscription: { select: { plan: true } } },
    })
    return data?.subscription?.plan ?? "FREE"
}

export const findUser = async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkId
        },
        include: {
            subscription: true,
            integrations: {
                select: {
                    id: true,
                    token: true,
                    expiresAt: true,
                    name: true

                }
            }
        }
    })
}


export const createUser = async (clerkId: string, firstname: string, lastname: string, email: string) => {
    return await client.user.upsert({
        where: {
            clerkId
        },
        update: {
            firstname,
            lastname,
        },
        create: {
            clerkId,
            firstname,
            lastname,
            email,
            subscription: {
                create: {},
            },
        },
        select: {
            firstname: true,
            lastname: true
        }
    })
}


export const updateSubscription = async (clerkId: string,
    props: { customerId?: string; plan?: "PRO" | "FREE" }
) => {
    return await client.user.update({
        where: {
            clerkId,
        }, data: {
            subscription: {
                update: {
                    data: {
                        ...props
                    }
                }
            }
        }
    })
}