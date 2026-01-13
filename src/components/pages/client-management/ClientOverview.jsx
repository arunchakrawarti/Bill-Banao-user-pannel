import Button from "@/components/common/Button";
import StatsCard from "@/components/molecules/StatsCard";
import React from "react";
import ClientOverviewTable from "./ClientOverviewTable";

import {
  clientInfo,
  clientStats,
} from "../../../config/clientOverview";

const ClientOverview = () => {
  return (
    <div>
      <div className="space-y-6 rounded-xl bg-white border border-gray-200 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                {clientInfo.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{clientInfo.name}</p>
              </div>
            </div>

            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <i className="ri-mail-line" /> {clientInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-phone-line" /> {clientInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-map-pin-line" /> {clientInfo.address}
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-global-line" /> {clientInfo.website}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <i className="ri-printer-line" /> Print
            </Button>
            <Button variant="danger">
              <i className="ri-download-line" /> Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientStats.map((item, i) => (
            <StatsCard key={i} {...item} />
          ))}
        </div>
      </div>

      <ClientOverviewTable />
    </div>
  );
};

export default ClientOverview;
