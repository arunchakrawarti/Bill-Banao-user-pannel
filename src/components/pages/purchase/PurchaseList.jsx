"use client";
import React from "react";
import Heading from "@/components/atoms/Heading";
import BasicTable from "@/components/common/BasicTable";
import { purchaseColumns, purchaseData } from "../../../config/purchase";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

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

const PurchaseList = () => {
  return (
    <div className=" mt-7">
      <Heading
        title="Clients Details"
        paragraph="Manage and view all your client information"
        actions={[
          {
            text: "Download",
            variant: "outline",
            icon: <i className="ri-download-line" />,
            onClick: () => console.log("Download"),
          },
          {
            text: "Import Clients",
            variant: "danger",
            icon: <i className="ri-upload-2-line" />,
            onClick: () => console.log("Import"),
          },
        ]}
      />

      <div className="mt-7 overflow-x-auto">
        <div className="flex rounded-t-2xl border border-gray-200 items-center justify-between bg-white p-4 gap-3 ">

          <div className="relative w-full max-w-sm">
            <Input
              type="text"
              icon="ri-search-line"
              placeholder="Search invoices..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-indigo-500 h-11 focus:ring-indigo-500"
            />

          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <i className="ri-calendar-line" />
              Date Range
            </Button>

            <Button variant="tertiary">
              <i className="ri-download-2-line" />
              Export
            </Button>
            <Button variant="danger">
              <i className="ri-add-line" />
              New Invoice
            </Button>

          </div>
        </div>
        <BasicTable
          columns={columns}
          data={purchaseData}
          wrapperClassName="rounded-b-2xl rounded-t-none  "
          pagination
          total={purchaseData.length}
        />

      </div>
    </div>
  );
};

export default PurchaseList;
