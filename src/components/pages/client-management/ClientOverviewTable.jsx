"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";

import {
  clientInvoiceColumns,
  clientInvoiceData,
  clientInvoiceActions,
} from "../../../config/clientOverviewTable";

const ClientOverviewTable = () => {
  return (
    <div className="mt-6">
      <div className="bg-white p-4 border border-gray-200 rounded-t-2xl">
        <h2 className="text-lg font-semibold">Invoice History</h2>
      </div>

      <BasicTable
        columns={clientInvoiceColumns}
        data={clientInvoiceData}
        actions={clientInvoiceActions}
        wrapperClassName="rounded-b-xl rounded-t-none"
        pagination
        pageSize={5}
        total={20}
      />
    </div>
  );
};

export default ClientOverviewTable;
