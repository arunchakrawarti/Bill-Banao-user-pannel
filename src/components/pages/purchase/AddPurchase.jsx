"use client";
import Heading from "@/components/atoms/Heading";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function AddPurchase() {
  return (
    <div className="space-y-6 mt-7">

      {/* Header */}
      <div className="flex items-center justify-between">
        <Heading
          title="Add New Purchase Order"
          paragraph="Fill in the details to add a purchase order"
        />

        <div className="w-[220px]">
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
      <div className="bg-white p-6 rounded-2xl border border-gray-200">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <Input label="Supplier Invoice S.No" placeholder="Invoice Number" defaultValue="INV-2024-009" className="border border-gray-200" icon="none" />
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

          <div className="border-2 border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2">
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

          {/* Buttons */}
          <div className="flex items-center justify-between mt-4">
             <div className="mt-6 flex items-center max-w-md gap-4 rounded-xl border border-gray-200 bg-white p-2">
        <div className="gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
            <i className="ri-camera-line text-2xl" />
          </div>
          <h2 className="font-semibold flex items-center gap-2">
            Upload a New Photo
          </h2>
        </div>

        <div className="flex gap-2">
          <Button variant="danger">
            Upload
          </Button>
          <Button variant="secondary">
            Remove
          </Button>
        </div>
      </div>

            <div className="flex gap-3">
              <Button variant="outline">Cancel</Button>
              <Button variant="danger">
                Add Expenses
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
