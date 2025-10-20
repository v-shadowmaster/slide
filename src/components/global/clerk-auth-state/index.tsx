import {ClerkLoading , SignedIn , SignedOut , SignInButton , UserButton} from "@clerk/nextjs";
import Loader from "../index";
import { User2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClerkAuthState(){
    return (<>
    <ClerkLoading>
        <Loader state>
        <></>
        </Loader>
    </ClerkLoading>
    <SignedOut>
        <SignInButton>
            <Button className="rounded-xl bg-[#252525] text-white hover-bg-[#252525]/70">
        <User2/> Login
            </Button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
        <UserButton>
        <UserButton.UserProfileLink
        label="Dashboard"
        url={`/dashboard`}
        labelIcon={<User2 size={16}/>}
        />
</UserButton>
    
    </SignedIn>
    </>)
}