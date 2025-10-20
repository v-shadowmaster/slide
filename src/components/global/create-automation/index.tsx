import { Button } from "@/components/ui/button";
import Loader from "..";
import { Cable } from "lucide-react";

export default function CreatAutomation(){
    // WIP : Create the automation in the database using mutate

    return <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medum to-[#1c2d70]">
        <Loader state={false}>
            <Cable/>
        </Loader>
        create an automation
    </Button>
}