import PurchaseList from '@/components/pages/purchase/PurchaseList'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div className="p-10">Loading...</div>}>
        <PurchaseList/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
