import React from 'react'
import logo from './kl-logo.jpeg';
const user={
    logo: logo
}
const Header = () => {
  return (
    <div class="header">
      <img src={user.logo}/>
      <h1>KL UNIVERSITY</h1>
    </div>
  )
}

export default Header
