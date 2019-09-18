import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import './styles.scss'

export const Header = () => {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>
          <img src='/images/logo.png' alt='todo logo' />
        </div>
        <div className='settings'>
          <ul>
            <li data-testid='quick-add-task-action' className='settings__add'>+</li>
            <li data-testid='dark-mode-action'><FaPizzaSlice /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
