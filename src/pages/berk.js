import React from "react";

import { Header } from "../components/header";
import { Bio } from "../components/main/bio";
import { Footer } from "../components/footer";
import { GlobalStyle } from "./styleglobal";


export default function Berk() {
    return (
        <div>
           <Header />
           <h1>Berk</h1>
           <Bio />
           <Footer />
           <GlobalStyle />
        </div>
    )
}