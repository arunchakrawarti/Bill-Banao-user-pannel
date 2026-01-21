"use client";
import React from "react";
import Heading from "@/components/atoms/Heading";
import BasicTable from "@/components/common/BasicTable";
import { purchaseColumns, purchaseData } from "../../../config/purchase";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Link from "next/link";

const columns = purchaseColumns.map((col) => {
  if (["amount", "paid", "cost", "taxable", "gst", "sgst"].includes(col.key)) {
    return {
      ...col,
      render: (v) => <span className="font-medium">₹{v}</span>,
    };
  }

  if (col.key === "balance") {
    return {
      ...col,
      render: (v) => (
        <span className={v > 0 ? "text-red-500" : "text-green-600"}>
          ₹{v}
        </span>
      ),
    };
  }

  return col;
});

const PurchaseOrder = () => {
  return (
    <div className="mt-6">
      <Heading
        title="Clients Details"
        paragraph="Manage and view all your client information"
        actions={[
          {
            text: "Download",
            variant: "outline",
            icon: <i className="ri-download-line" />,
          },
          {
            text: "Import Clients",
            variant: "danger",
            icon: <i className="ri-upload-2-line" />,
          },
        ]}
      />

      <div className="mt-6">
        {/* Top Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-t-2xl border border-gray-200 bg-white p-4">
          
          {/* Search */}
          <div className="w-full lg:max-w-sm">
            <Input
              type="text"
              icon="ri-search-line"
              placeholder="Search invoices..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm h-11 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-2 justify-start lg:justify-end">
            <Link href="/purchase/add-purchase">
            <Button variant="outline" className="w-full sm:w-auto">
              <i className="ri-calendar-line" />
              <span className="ml-2">Date Range</span>
            </Button>
            </Link>

            <Link href="/purchase/add-purchase">
            <Button variant="tertiary" className="w-full sm:w-auto">
              <i className="ri-download-2-line" />
              <span className="ml-2">Export</span>
            </Button>
            </Link>

           <Link href="/purchase/add-purchase">
            <Button variant="danger" className="w-full sm:w-auto">
              <i className="ri-add-line" />
              <span className="ml-2">New Invoice</span>
            </Button>
           </Link>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <BasicTable
            columns={columns}
            data={purchaseData}
            wrapperClassName="rounded-b-2xl rounded-t-none min-w-[900px]"
            pagination
            total={purchaseData.length}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
