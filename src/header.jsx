import React from 'react'
import { Link } from 'react-router-dom'

import style from './app.css'

const Header = () => (
  <div className={style.header}>
    <Link to="/">
      <img
        src="http://www.siicanada.com/wp-content/uploads/2016/08/sii-canada-logo-website-72x110.png"
        alt="SII Canada Logo"
      />
    </Link>
  </div>
)

export default Header