import PurchaseReturn from '@/components/pages/purchase/PurchaseReturn'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <PurchaseReturn/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
