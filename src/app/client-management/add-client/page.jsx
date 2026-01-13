import AddClients from '@/components/pages/client-management/AddClients'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <AddClients/>
      </MainLayout>
    </div>
  )
}

export default page
