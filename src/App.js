import React from 'react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { Tasks } from './components/Tasks'

export const App = () => (
  <div className='App'>
    <header className='App-header'>
      <Header />
      <Sidebar />
      <Tasks />
    </header>
  </div>
)
