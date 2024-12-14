import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/enq'>INQUIRY</Link></li>
            </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        copyright@2024
      </footer>
    </div>
  )
}

export default Root
