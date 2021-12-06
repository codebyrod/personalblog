import React from 'react'
import { Header } from '../components/header/index'
import { createGlobalStyle } from 'styled-components'
import { Main } from '../components/main'
import { Footer } from '../components/footer'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`

export default function index() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
