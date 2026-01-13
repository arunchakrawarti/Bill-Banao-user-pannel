import ClientDetails from '@/components/pages/client-management/ClientDetails'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div className="p-10">Loading...</div>}>
        <ClientDetails/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
