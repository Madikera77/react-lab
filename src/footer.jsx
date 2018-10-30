import React from 'react'
import { Link } from 'react-router-dom'

import style from './app.css'

const Footer = () => (
  <div className={style.footer}>
    <div>© SII CANADA. Tous droits réservés.</div>
    <Link to="/about">About</Link>
  </div>
)

export default Footer