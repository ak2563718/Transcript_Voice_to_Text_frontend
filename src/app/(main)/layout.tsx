import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

type Props ={
    children :ReactNode;
}

export default function Pagelayout({children}:Props){
    return (
        <>
        <Navbar/>
        <div>
            {children}
        </div>
        </>
    )
}