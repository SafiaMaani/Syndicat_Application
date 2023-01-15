import React from 'react'
import ButtonAdd from './ButtonAdd'

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <label htmlFor="my-drawer" className="drawer-button btn btn-primary">Menu</label>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
      </div>
      <div>
        <ButtonAdd />
      </div>
    </div>
  )
}

export default NavBar