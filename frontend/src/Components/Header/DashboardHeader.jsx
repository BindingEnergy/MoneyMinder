import { UserButton } from '@clerk/clerk-react'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between gap-0 w-screen'>
      <div className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </div>
      <div className="searchBox rounded-lg shadow-md hover:border-black hover:border-2">
        <input type="text" placeholder='Search Transactions' className='p-2 rounded-lg border-2 border-black'/>
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  )
}

export default DashboardHeader
