import EwayBill from '@/components/pages/sale-invoice/EwayBill'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
          <Suspense fallback={<div>Loading...</div>}>
        <EwayBill/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
