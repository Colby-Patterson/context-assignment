import React from "react"
import { NavLink, Outlet } from "react-router-dom"

function PageContainer(){
  return (
    <div>
      <div>
        <div>
          <NavLink to='/'>Home</NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PageContainer