import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { useState, useEffect } from 'react'

export default function Nav(){
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location.pathname)

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location])

  return (
    <>
      <nav>
        <Link to='/' className={`navButton ${activeTab === '/' ? 'activeTab' : ''}`}>PHOTOS</Link>
        <Link to='/our-story' className={`navButton ${activeTab === '/our-story' ? 'activeTab' : ''}`}>OUR STORY</Link>
        <Link to='/registry' className={`navButton ${activeTab === '/registry' ? 'activeTab' : ''}`}>REGISTRY</Link>
      </nav>
      <Outlet />
      <Footer/>
    </>
  )
}