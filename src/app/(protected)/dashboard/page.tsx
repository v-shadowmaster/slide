import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";


export default async function Page() {


    const user = await onBoardUser();

    if (user.status === 200 || user.status === 201) {
        const fullName = `${user?.data?.firstname ?? ''} ${user?.data?.lastname ?? ''}`.trim().replace(/\s+/g, '-');
        return redirect(`dashboard/${fullName}`)

    }

    return redirect("/sign-in")
    return <div></div>
};