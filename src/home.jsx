import React from 'react'

import Card from './card'
import List from './list'

import style from './app.css'

const Home = () => {
  return (
    <div className={style.content}>
      <Card />
      <List />
    </div>
  )
}

export default Home