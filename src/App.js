import React, { useEffect } from 'react'
import './styles/base.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

export default function App() {
 return (
   <div className="App" onContextMenu="return false;">
      <Header/>
      <Hero/>
      <Gallery/>
    </div>
  );
}