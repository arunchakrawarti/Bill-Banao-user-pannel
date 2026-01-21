import SaleReturn from '@/components/pages/sale-invoice/SaleReturn'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <SaleReturn/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
