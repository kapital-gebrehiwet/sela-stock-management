import React from 'react'
import Ownernavbar from '../../components/ownernavbar'
import Ownersidebar from '../../components/ownersidebar'

const OwnerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Ownernavbar/>
      <div className="pt-16 left-0">
        <Ownersidebar/>
        {children}
      </div>
    </div>
  )
}

export default OwnerLayout
