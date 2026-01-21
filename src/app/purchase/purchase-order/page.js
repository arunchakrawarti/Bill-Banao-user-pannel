import PurchaseOrder from '@/components/pages/purchase/PurchaseOrder'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <div>
            <MainLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <PurchaseOrder />
                </Suspense>
            </MainLayout>
        </div>
    )
}

export default page
