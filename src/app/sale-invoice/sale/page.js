import Sale from '@/components/pages/sale-invoice/Sale'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Sale/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
