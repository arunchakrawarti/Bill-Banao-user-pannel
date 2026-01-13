"use client";

import React from "react";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import { ViewAction } from "@/components/atoms/Icons";
import { dashboardTableData } from "../../../config/dashboardTable";


const columns = [
  { label: "Customer", key: "customer" },
  { label: "Amount", key: "amount" },
  { label: "Due date", key: "dueDate" },
  {
    label: "Status",
    key: "status",
    render: (value) => <Badge text={value} />,
  },
];

const actions = [ViewAction];

const DashboardTable = () => {
  return (
    <div className="space-y-4 mt-7">
      <BasicTable
        columns={columns}
        data={dashboardTableData}
        actions={actions}
        pagination
        pageSize={10}
        total={50}
      />
    </div>
  );
};

export default DashboardTable;
