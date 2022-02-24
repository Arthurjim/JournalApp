import React from 'react'
import JournalEntries from './JournalEntries'

const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebad-navbar'>
            <h3 className='mt-5'>
                <i className='far fa-moon'></i>
                <span> Arturo</span>
            </h3>
            <button className='btn'>
                Logout
            </button>
        </div>
        <div className='journal__new-entry'>
            <i className='far fa-calendar-plus fa-4x'></i>
            <p className='mt-5'>New Entry</p>
        </div>
        <JournalEntries/>
    </aside>
  )
}

export default Sidebar