'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

const ownernavbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full h-16 bg-slate-600 text-white flex justify-between items-center px-4 z-50 shadow-md'>
        <div className='flex items-center'>
            <h1 className='text-2xl font-bold'>Owner Dashboard</h1>
        </div>
        <div className='flex items-center'>
            <Button 
              onClick={() => signOut({ callbackUrl: '/' })}
              variant="destructive"
            >
              Logout
            </Button>
        </div>
    </div>
  )
}

export default ownernavbar