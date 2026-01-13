import React from 'react'
import DashboardOverview from './DashboardOverview'
import RecentInvoicesCard from './RecentInvoiceCard'
import DashboardTable from './DashboardTable'


const Mainhome = () => {
  return (
    <div>
      <DashboardOverview/>
      <RecentInvoicesCard/>
      <DashboardTable/>
    </div>
  )
}

export default Mainhome
