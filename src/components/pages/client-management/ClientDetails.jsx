"use client";
import React from "react";
import Heading from "@/components/atoms/Heading";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";

import {
  clientColumns,
  clientData,
  clientActions,
} from "../../../config/clientDetails";

const ClientDetails = () => {
  const router = useRouter();

  return (
    <div className="space-y-6 mt-7">
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

      <div className="flex flex-col gap-3  sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-72">
          <div className="flex items-center gap-2 rounded-lg border px-3 bg-white">
            <Input
              placeholder="Search here"
              icon="ri-search-line text-gray-500"
              className="text-sm h-11 w-full"
            />
          </div>
        </div>
        <Button 
          variant = "danger"
          className="h-11"
          onClick={() => router.push("/client-management/add-client")}
        >
          <i className="ri-add-line" />
          Add New Client
        </Button>
      </div>


      <BasicTable
        columns={clientColumns}
        data={clientData}
        actions={clientActions}
        pagination
        pageSize={10}
        total={100}
      />
    </div>
  );
};

export default ClientDetails;
