import React from "react";
import { Header } from "../components/header";
import { Bio } from "../components/main/bio";
import { Footer } from "../components/footer";
import { GlobalStyle } from "./styleglobal";


export default function Homeverse() {
    return (
        <div>
           <Header />
           <h1>Homeverse</h1>
           <Bio />
           <Footer />
           <GlobalStyle />
        </div>
    )
}