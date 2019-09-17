import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <img src='/images/logo.png' alt='todo logo' />
      </nav>
      <div className='settings'>
        <ul>
          <li>+</li>
          <li><FaPizzaSlice /></li>
        </ul>
      </div>
    </header>
  )
}
