import { Outlet, Link } from "react-router-dom";
import Footer from './Footer'

export default function Nav(){
  return (
    <>
      <nav>
        <Link to="/" className='navButton'>PHOTOS</Link>
        <Link to="/our-story" className='navButton'>OUR STORY</Link>
        <Link to="/registry" className='navButton'>REGISTRY</Link>
      </nav>
      <Outlet />
      <Footer/>
    </>
  )
}