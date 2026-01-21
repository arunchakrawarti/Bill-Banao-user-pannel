import EInvoice from '@/components/pages/sale-invoice/EInvoice'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <EInvoice />
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
