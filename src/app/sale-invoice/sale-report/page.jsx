import SaleReport from '@/components/pages/sale-invoice/SaleReport'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div className="p-10">Loading...</div>}>
        <SaleReport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
