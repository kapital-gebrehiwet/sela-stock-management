import React from 'react'
import Managernavbar from '../../components/managernavbar'
import Managersidebar from '../../components/managersidebar'
import Sidebar from '@/app/components/Sidebar'

const managerlayout = ({children}) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Managernavbar/>
        <div className="pt-16 left-0">
          <Managersidebar/>
          {children}
        </div>
      </main>
    </div>
  )
}

export default managerlayout 