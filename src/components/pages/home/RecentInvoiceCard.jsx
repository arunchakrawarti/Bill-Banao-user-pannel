"use client";
import Button from "@/components/common/Button";
import React from "react";

const statusData = [
  { label: "Paid", color: "bg-green-500" },
  { label: "Unpaid", color: "bg-yellow-500" },
  { label: "Overdue", color: "bg-red-500" },
  { label: "Draft", color: "bg-blue-500" },
];

const RecentInvoicesCard = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white mt-7 p-5 font-inter">

      <div className="flex items-center pb-3 border-b border-gray-500 justify-between">
        <h3 className="font-inter font-semibold text-[1rem] tracking-[0.0044rem]">
          Recent Invoices
        </h3>
        <Button variant="success">
          View All
        </Button>
      </div>

      <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div className="w-[35%] bg-green-500" />
        <div className="w-[25%] bg-yellow-500" />
        <div className="w-[20%] bg-red-500" />
        <div className="w-[20%] bg-blue-500" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-[0.75rem] text-gray-600">
        {statusData.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <span className={`h-3 w-3 rounded-full ${item.color}`} />
            <span className="font-inter font-semibold text-[1rem] tracking-[0.0044rem]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoicesCard;
