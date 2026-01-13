"use client";
import React from "react";
import { saleReportStats } from "../../../config/salereport";
import Heading from "@/components/atoms/Heading";
import StatsCard from "@/components/molecules/StatsCard";
import BasicTable from "@/components/common/BasicTable";
import {
  clientInvoiceColumns,
  clientInvoiceData,
  clientInvoiceActions,
} from "../../../config/clientinvoice";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";

const SaleReport = () => {
  return (
    <div>
      <Heading
        title="Invoice List"
        paragraph="View and manage all your invoices"
      />

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {saleReportStats.map((item, i) => (
          <StatsCard
            key={i}
            title={item.title}
            value={item.value}
            change={item.change}
            invoices={item.invoices}
            variant="detailed"
          />
        ))}
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap rounded-t-2xl border border-gray-200 items-center justify-between bg-white p-4 gap-3 ">

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

            <Link href="/sale-invoice/sale-report/add-invoice">
              <Button variant="danger">
                <i className="ri-add-line" />
                New Invoice
              </Button>
            </Link>
          </div>
        </div>
        <BasicTable
          columns={clientInvoiceColumns}
          data={clientInvoiceData}
          actions={clientInvoiceActions}
          wrapperClassName=""
          pagination
          pageSize={5}
          total={20}
        />
      </div>
    </div>
  );
};

export default SaleReport;
