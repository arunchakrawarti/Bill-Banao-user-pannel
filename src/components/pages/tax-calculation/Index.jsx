"use client"
import React from 'react'
import Information from '../settings/Information'
import Heading from '@/components/atoms/Heading'
import Input from '@/components/common/Input'
import GSTBillCalculator from './GSTBillCalculator'

const MainCalculator = () => {
  return (
    <div>
       <div className="space-y-4 mt-7">
      <Heading
        title="GST Bill Calculator"
        paragraph="Calculate GST, record purchases and sales, and manage your tax payments"
        actions={[
          {
            text: "Quick Reference Guide",
            variant: "outline",
            icon: <i className="ri-book-open-line" />,
            onClick: () => {},
          },
        ]}
      />
      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">

        <p className="text-sm font-medium">Select Period</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Month"
            type="select"
            options={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            defaultValue="December"
            className="border border-gray-200"
            icon="none"
          />

          <Input
            label="Year"
            type="select"
            options={["2023", "2024", "2025"]}
            defaultValue="2024"
            className="border border-gray-200"
            icon="none"
          />
        </div>
        <div className='flex bg-[#BEDBFF] p-2 rounded-md'>
            <h1 className='text-[#193CB8] font-bold'>Note:</h1>
            <p className='text-[#193CB8] font-inter font-normal text-[0.875rem] tracking-[-0.009375rem] mt-1'>GST filing will be handled by Bill Banao Admin after payment.</p>
        </div>
      </div>
    </div>
    <GSTBillCalculator/>
    </div>
  )
}

export default MainCalculator
