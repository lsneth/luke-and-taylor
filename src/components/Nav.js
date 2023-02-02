import { Outlet, Link } from "react-router-dom";

export default function Nav(){
  return (
    <>
      <nav>
        <Link to="/" className='navButton'>Photos</Link>
        <Link to="/our-story" className='navButton'>Our Story</Link>
        <Link to="/registry" className='navButton'>Registry</Link>
      </nav>
      <Outlet />
    </>
  )
}