import React from 'react'
import { Outlet, Link } from "react-router-dom"
import Logo from '../../Assets/images/lesyndic.png'

function Dashboard() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label htmlFor="my-drawer" className="drawer-button btn btn-primary">Menu</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay "></label>
        <ul className="menu flex justify-evenly p-4 w-80 bg-gray-200 text-blue-500">
          {/* <!-- Sidebar content here --> */}
          <div className='flex justify-center'>
            <Link to={''} className='w-1/2'><img src={Logo} alt='Logo'/></Link>
          </div>
          <li><Link to={'appartements'}>Appartements</Link></li>
          <li><Link to={'paiements'}>Paiements</Link></li>
          <li><Link to={'factures'}>Factures</Link></li>
          <li><Link to={'residents'}>Résidents</Link></li>
          <li><Link to={'logout'}>Log Out</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard