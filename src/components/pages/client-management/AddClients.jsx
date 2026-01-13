"use client";
import React from "react";
import Heading from "@/components/atoms/Heading";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddClients = () => {
  return (
    <div className="mt-7">
      <Heading
        title="Add New Client"
        paragraph="Enter client information to create a new account"
      />
      <div className="mt-6 flex items-center max-w-md gap-4 rounded-xl bg-white border border-gray-300 p-4">
        <div className="gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
            <i className="ri-camera-line text-2xl" />
          </div>
          <h2 className="font-semibold flex items-center gap-2">
            Upload a New Photo
          </h2>
        </div>

        <div className="flex gap-4">
          <Button variant="danger">
            Upload
          </Button>
          <Button variant="secondary">
            Remove
          </Button>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white border border-gray-300 p-6">
        <h3 className="mb-4 text-lg font-semibold">Basic Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="Client Name" icon="ri-user-3-line" placeholder="Enter client name" className="border border-gray-400" />
          <Input label="Email" type="email" icon="ri-mail-line" placeholder="Enter email address" className="border border-gray-400"/>
          <Input label="Phone" icon="ri-phone-line" placeholder="Enter phone number" className="border border-gray-400" />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Currency"
            type="select"
            className="border border-gray-400"
            icon="ri-money-dollar-circle-line"
            placeholder="Select currency"
            options={[
              { label: "INR", value: "INR" },
              { label: "USD", value: "USD" },
            ]}
          />
          <Input label="Website" icon="ri-global-line" placeholder="https://example.com" className="border border-gray-400" />
          <Input label="GST Number" icon="ri-file-text-line" placeholder="Enter GST number" className="border border-gray-400"/>
        </div>
        <h3 className="mt-8 mb-4 text-lg font-semibold">Billing Address</h3>

        <Input label="Street Address" icon="ri-map-pin-line" placeholder="Enter street address" className="border border-gray-400"/>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="City" icon="ri-building-4-line" placeholder="Enter city" className="border border-gray-400"/>
          <Input
            label="State"
            type="select"
            icon="ri-map-2-line"
            className="border border-gray-400"
            placeholder="Select state"
            options={["Delhi", "Maharashtra", "UP"]}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="ZIP Code" icon="ri-mail-open-line" placeholder="Enter ZIP code" className="border border-gray-400"/>
          <Input
            label="Country"
            type="select"
            icon="ri-earth-line"
            className="border border-gray-400"
            placeholder="Select country"
            options={["India", "USA"]}
          />
        </div>
        <h3 className="mt-8 mb-4 text-lg font-semibold">Shipping Address</h3>

        <Input label="Street Address" icon="ri-truck-line" placeholder="Enter street address" className="border border-gray-400"/>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="City" icon="ri-building-line" placeholder="Enter city" className="border border-gray-400"/>
          <Input
            label="State"
            type="select"
            icon="ri-map-pin-2-line"
            className="border border-gray-400"
            placeholder="Select state"
            options={["Delhi", "Maharashtra", "UP"]}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="ZIP Code" icon="ri-mail-line" placeholder="Enter ZIP code" className="border border-gray-400"/>
          <Input
            label="Country"
            type="select"
            icon="ri-earth-line"
            className="border border-gray-400"
            placeholder="Select country"
            options={["India", "USA"]}
          />
        </div>
        <h3 className="mt-8 mb-4 text-lg font-semibold">Bank Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Bank Name" icon="ri-bank-line" placeholder="Enter bank name" className="border border-gray-400"/>
          <Input label="Account Holder Name" icon="ri-user-3-line" placeholder="Enter account holder name" className="border border-gray-400"/>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Account Number" icon="ri-secure-payment-line" placeholder="Enter account number" className="border border-gray-400"/>
          <Input label="IFSC Code" icon="ri-barcode-box-line" placeholder="Enter IFSC code" className="border border-gray-400"/>
        </div>

        <div className="mt-4">
          <Input label="Branch Name" icon="ri-git-branch-line" placeholder="Enter branch name" className="border border-gray-400"/>

          <Button className="flex mt-4 h-[45px] items-center gap-2 rounded-lg bg-red-500 px-5 text-sm text-white hover:bg-red-600">
            <i className="ri-add-line" /> Add Bank
          </Button>
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <Button variant="outline">
            <i className="ri-close-line" /> Cancel
          </Button>
          <Button variant="danger">
            <i className="ri-user-add-line" /> Add Client
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddClients;
