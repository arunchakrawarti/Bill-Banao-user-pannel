import InvoiceTemplate from '@/components/pages/sale-invoice/InvoiceTemplate'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <InvoiceTemplate/>
      </MainLayout>
    </div>
  )
}

export default page
