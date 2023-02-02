import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";import './styles/styles.css'
import Photos from './pages/Photos'
import OurStory from './pages/OurStory'
import Registry from './pages/Registry'

export default function App() {
 return (
    <BrowserRouter className="App">
      <Routes>
        <Route>
          <Route index element={<Photos />} />
          <Route path="blogs" element={<OurStory />} />
          <Route path="contact" element={<Registry />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}