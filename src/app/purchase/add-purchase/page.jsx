import AddPurchase from '@/components/pages/purchase/AddPurchase'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <AddPurchase/>
      </MainLayout>
    </div>
  )
}

export default page
