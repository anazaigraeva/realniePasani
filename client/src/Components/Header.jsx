import React from 'react'
import Navbar from './Navbar/Navbar'

function Header({user, setUser}) {
  return (
    <Navbar user={user} setUser={setUser}/>
  )
}

export default Header