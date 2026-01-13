"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";

const GSTSummary = () => {
  // 🧾 Columns (inline)
  const columns = [
    {
      label: "Particulars",
      key: "particular",
      render: (val, row) => (
        <span
          className={
            row.isPayable
              ? "text-red-600 font-semibold"
              : row.isClosing
              ? "text-green-600 font-semibold"
              : ""
          }
        >
          {val}
        </span>
      ),
    },
    { label: "UTGST (₹)", key: "utgst" },
    { label: "IGST (₹)", key: "igst" },
    { label: "CGST (₹)", key: "cgst" },
    { label: "SGST (₹)", key: "sgst" },
    {
      label: "Total GST (₹)",
      key: "total",
      render: (val, row) => (
        <span
          className={
            row.isPayable
              ? "text-red-600 font-semibold"
              : row.isClosing
              ? "text-green-600 font-semibold"
              : ""
          }
        >
          {val}
        </span>
      ),
    },
  ];

  // 📊 Table Data (inline)
  const data = [
    {
      particular: "Opening Input Tax Credit",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
    },
    {
      particular: "Add: Purchase ITC",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
    },
    {
      particular: "Total Input Tax Credit",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
    },
    {
      particular: "Output Tax Liability",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
    },
    {
      particular: "Adjustment (Set-off)",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
    },
    {
      particular: "GST Payable",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
      isPayable: true,
    },
    {
      particular: "Closing Input Tax Credit (Carry Forward)",
      utgst: "0.00",
      igst: "0.00",
      cgst: "0.00",
      sgst: "0.00",
      total: "0.00",
      isClosing: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">
            GST Reconciliation Summary
          </h3>
          <p className="text-sm text-gray-500">
            Auto-calculated reconciliation table
          </p>
        </div>
        <span className="text-xs bg-gray-100 px-3 py-1 rounded">
          View Only
        </span>
      </div>

      {/* Table */}
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-xl"
      />

      {/* Note */}
      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800">
        <b>Note:</b> All calculations are automatic. GST set-off is applied
        according to GST rules.
      </div>
    </div>
  );
};

export default GSTSummary;
