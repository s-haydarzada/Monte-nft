import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ScrollToTop from './helpers/scrollToTop';
import {BrowserRouter} from 'react-router-dom';
import Pages from './pages';
import "./assets/style/style.scss"


function App() {
  

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Pages/>
    </BrowserRouter>

  )
}

export default App
