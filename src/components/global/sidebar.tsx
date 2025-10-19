'use client';

import { usePath } from "@/hooks/use-nav";

export default function Sidebar (){
    const {page } = usePath();
    return <div>Sidebar</div>
}