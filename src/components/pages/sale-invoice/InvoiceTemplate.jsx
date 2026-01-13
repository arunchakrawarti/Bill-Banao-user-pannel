import Heading from '@/components/atoms/Heading'
import TemplateCard from '@/components/molecules/TemplateCard'
import { templateData } from "../../../config/templateData";
import React from 'react'

const InvoiceTemplate = () => {
  return (
    <div className='mt-7'>
       <Heading
        title="Invoice List"
        paragraph="Choose and customize your invoice templates"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5">
      {templateData.map((item, i) => (
        <TemplateCard key={i} {...item} />
      ))}
    </div>
    </div>
  )
}

export default InvoiceTemplate
