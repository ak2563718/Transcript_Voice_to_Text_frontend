import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Children, ReactNode } from "react";

type Props ={
    children :ReactNode;
}
export default function PageLayout({children}:Props){
    return(
        <>
        <Navbar/>
        <div>
            {children}
        </div>
            <Footer />
      
        </>
    )
}