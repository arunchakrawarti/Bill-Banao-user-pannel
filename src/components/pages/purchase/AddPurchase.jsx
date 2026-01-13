"use client";
import Heading from "@/components/atoms/Heading";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function AddPurchase() {
  return (
    <div className="mt-7 space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Heading
          title="Add New Purchase Order"
          paragraph="Fill in the details to add a purchase order"
        />

        <div className="w-full sm:w-[220px]">
          <Input
            type="select"
            placeholder="Select One"
            options={["Select One", "Pending", "Approved"]}
            className="border border-gray-200"
            icon="none"
          />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input label="Purchase ID" placeholder="Purchase ID" className="border border-gray-200" icon="none" />
          <Input label="Select Vendor" placeholder="Select Vendor" defaultValue="INV-2024-009" className="border border-gray-200" icon="none" />
          <Input label="Reference" placeholder="Reference" className="border border-gray-200" icon="none" />

          <Input label="Amount" placeholder="Amount" className="border border-gray-200" icon="none" />
          <Input
            label="Payment Mode"
            type="select"
            placeholder="Select"
            options={["Cash", "UPI", "Bank"]}
            className="border border-gray-200"
            icon="none"
          />
          <Input
            label="Purchase Date"
            type="date"
            placeholder="Purchase Date"
            className="border border-gray-200"
            icon="none"
          />

          <Input
            label="Due Date"
            type="date"
            placeholder="Due Date"
            className="border border-gray-200"
            icon="none"
          />
          <Input
            label="Supplier Invoice S.No"
            placeholder="Invoice Number"
            defaultValue="INV-2024-009"
            className="border border-gray-200"
            icon="none"
          />
          <Input
            label="Payment Status"
            type="select"
            placeholder="Select"
            options={["Paid", "Pending"]}
            className="border border-gray-200"
            icon="none"
          />
        </div>

        {/* Description */}
        <div className="mt-4">
          <Input
            label="Description"
            type="textarea"
            placeholder="Description"
            className="border border-gray-200"
            icon="none"
          />
        </div>

        {/* Attachment */}
        <div className="mt-6">
          <label className="block text-sm mb-2">Attachment</label>

          <div className="border-2  border-gray-300 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <i className="ri-upload-cloud-2-line text-2xl" />
            </div>

            <p className="font-medium">
              Drag & drop files or{" "}
              <span className="text-indigo-600 cursor-pointer">Browse</span>
            </p>

            <p className="text-xs text-gray-500">
              Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Upload Box */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 w-full lg:max-w-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <i className="ri-camera-line text-2xl" />
                </div>
                <h2 className="font-semibold">Upload a New Photo</h2>
              </div>

              <div className="flex gap-2 sm:ml-auto">
                <Button variant="danger">Upload</Button>
                <Button variant="secondary">Remove</Button>
              </div>
            </div>

            {/* Form Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button variant="danger" className="w-full sm:w-auto">
                Add Expenses
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
