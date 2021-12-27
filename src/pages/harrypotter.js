import React from "react";
import { Header } from "../components/header";
import { Bio } from "../components/main/bio";
import { Footer } from "../components/footer";
import { GlobalStyle } from "./styleglobal";


export default function HarryPotter() {
    return (
        <div>
           <Header />
           <h1>Harry Potter</h1>
           <Bio />
           <Footer />
           <GlobalStyle />
        </div>
    )
}