import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/styles.css'
import Photos from './pages/Photos'
import OurStory from './pages/OurStory'
import Registry from './pages/Registry'
import Nav from './components/Nav'

export default function App() {
 return (
  <BrowserRouter className='App'>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Nav />}>
        <Route index element={<Photos />} />
        <Route path={`${process.env.PUBLIC_URL}/our-story`} element={<OurStory />} />
        <Route path={`${process.env.PUBLIC_URL}/registry`} element={<Registry />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}