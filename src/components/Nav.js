import { Outlet, Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import ReactGA from "react-ga4"

export default function Nav(){
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(location.pathname)

  ReactGA.initialize('G-4GBXBDPV9M')

  function sendEvent({category, action}){
      ReactGA.event({
          category,
          action
      })
  }

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location])

  return (
    <>
      <nav>
        <Link to='/' className={`navButton ${activeTab === '/' ? 'activeTab' : ''}`} onClick={()=>sendEvent({category:'navigation', action:'nav photo'})}>PHOTOS</Link>
        <Link to='/our-story' className={`navButton ${activeTab === '/our-story' ? 'activeTab' : ''}`} onClick={()=>sendEvent({category:'navigation', action:'nav our story'})}>OUR STORY</Link>
        <Link to='/registry' className={`navButton ${activeTab === '/registry' ? 'activeTab' : ''}`} onClick={()=>sendEvent({category:'navigation', action:'nav registry'})}>REGISTRY</Link>
      </nav>
      <Outlet />
      <Footer/>
    </>
  )
}