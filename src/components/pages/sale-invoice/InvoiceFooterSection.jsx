"use client";
import Input from "@/components/common/Input";

export default function InvoiceFooterSection() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 rounded-xl bg-[#F3F4FF] p-6 space-y-5">

        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <Input
              label="Select Bank"
              type="select"
              icon="none" className="border border-gray-400"
              placeholder="Select"
              options={["HDFC Bank", "ICICI Bank", "Axis Bank"]}
            />
          </div>
          <button className="h-[45px] rounded-lg 
          bg-blue-600 px-5 text-white font-medium">
            Add Bank
          </button>
        </div>

        <Input
          label="Notes"
          type="textarea"
          icon="none" 
          placeholder="Enter Notes"
          className="h-[120px] border border-gray-400"
        />

        <Input
          label="Terms & Conditions"
          type="textarea"
          icon="none" 
          placeholder="Enter Terms & Conditions"
          className="h-[120px] border border-gray-400"
        />
      </div>

      {/* Right Side */}
      <div className="rounded-xl bg-[#F3F4FF] p-6 space-y-4">
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Taxable Amount:</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Vat:</span>
            <span>₹0.00</span>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
            <span>Round Off</span>
            <input type="checkbox" className="toggle toggle-primary" />
            
          </div>
          <span>₹0.00</span>
          </div>

          <div className="border-t pt-3 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>₹0.00</span>
          </div>
        </div>

        <Input
          label="Signature Name"
          placeholder="Enter"
          icon="none" className="border border-gray-400"
        />

        <Input
          label="Signature Image"
          type="file"
          icon="ri-upload-cloud-line"
          className="border border-gray-400"
        />
      </div>

    </div>
  );
}
