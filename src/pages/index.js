import React from 'react'
import { Header } from '../components/header'
import { GlobalStyle } from './styleglobal'
import { Main } from '../components/main'
import { Footer } from '../components/footer'


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
