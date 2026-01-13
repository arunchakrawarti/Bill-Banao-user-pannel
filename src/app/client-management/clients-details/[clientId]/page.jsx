import ClientOverview from '@/components/pages/client-management/ClientOverview'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <ClientOverview/>
      </MainLayout>
    </div>
  )
}

export default page
