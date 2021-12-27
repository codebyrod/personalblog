import React from "react";
import { Header } from "../components/header";
import { Bio } from "../components/main/bio";
import { Footer } from "../components/footer";
import { GlobalStyle } from "./styleglobal";


export default function  StarWars() {
    return (
        <div>
           <Header />
           <h1>Star Wars</h1>
           <Bio />
           <Footer />
           <GlobalStyle />
        </div>
    )
}