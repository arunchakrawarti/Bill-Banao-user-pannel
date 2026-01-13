"use client";
import { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function GstEntities() {
  return (
    <div className="space-y-8">
      <EntryCard
        title="Purchase Entry"
        subtitle="Add Input Tax Credit (ITC)"
        type="purchase"
      />
      <EntryCard
        title="Sales Entry"
        subtitle="Add Output Tax Liability"
        type="sales"
      />
    </div>
  );
}

function EntryCard({ title, subtitle, type }) {
  const [gstType, setGstType] = useState("intra");
  const [amount, setAmount] = useState("");

  const rate = 18;

  const gst = (Number(amount || 0) * rate) / 100;
  const cgst = gstType === "intra" ? gst / 2 : 0;
  const sgst = gstType === "intra" ? gst / 2 : 0;
  const igst = gstType === "inter" ? gst : 0;

  const total = Number(amount || 0) + cgst + sgst + igst;

  const theme =
    type === "purchase"
      ? {
        icon: "ri-arrow-down-line",
        bg: "bg-green-50",
        btn: "bg-green-600",
        text: "text-green-600",
      }
      : {
        icon: "ri-arrow-up-line",
        bg: "bg-blue-50",
        btn: "bg-blue-600",
        text: "text-blue-600",
      };

  return (
    <div className="bg-white p-6 mt-5 rounded-xl border shadow-sm border-gray-300 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 rounded-lg flex items-center justify-center ${theme.bg} ${theme.text}`}
        >
          <i className={`${theme.icon} ri-xl`} />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <Input
        type="select"
        label={type === "purchase" ? "Purchase Type" : "Customer Type"}
        className="border border-gray-300"
        icon="ri-map-pin-line"
        value={gstType}
        onChange={(e) => setGstType(e.target.value)}
        options={[
          { label: "Intra-State", value: "intra" },
          { label: "Inter-State", value: "inter" },
        ]}
      />
      <Input
        type="number"
        label="Taxable Amount (₹)"
        className="border border-gray-300"
        placeholder="Enter amount"
        icon="ri-money-rupee-circle-line"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Input
        type="select"
        label="GST Rate (%)"
        className="border border-gray-300"
        icon="ri-percent-line"
        options={[
          { label: "18%", value: 18 },
          { label: "12%", value: 12 },
          { label: "5%", value: 5 },
        ]}
      />
      <div>
        <p className="text-sm text-gray-500 mb-2">
          Auto-calculated GST Components
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 w-full min-w-0">
          <GSTBox label="CGST" value={cgst} />
          <GSTBox label="SGST" value={sgst} />
          <GSTBox label="IGST" value={igst} />
          <GSTBox label="UTGST" value={0} />
          <GSTBox label="CESS" value={0} />
        </div>

      </div>

      {/* Total */}
      <div className={`${theme.bg} p-3 rounded-lg font-semibold`}>
        Total Invoice Amount ₹ {total.toFixed(2)}
      </div>

      {/* Button */}
      <Button variant="tertiary" className="w-full">
        + Add {title}
      </Button>
    </div>
  );
}

const GSTBox = ({ label, value }) => (
  <div className="bg-light p-2 rounded bg-gray-200 text-center">
    <p className="text-xs text-gray-500">{label}</p>
    ₹{value.toFixed(2)}
  </div>
);
