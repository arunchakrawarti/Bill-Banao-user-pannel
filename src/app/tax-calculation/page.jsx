import MainCalculator from '@/components/pages/tax-calculation/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainCalculator/>
      </MainLayout>
    </div>
  )
}

export default page
