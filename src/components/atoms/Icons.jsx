"use client";
import { useRouter } from "next/navigation";
import Button from "../common/Button";


export const ViewAction = ({ row }) => {
  const router = useRouter();
  return (
    <Button variant="danger" className="text-blue-400 bg-white"
      onClick={() => router.push(row.route)}
      
      title="View"
    >
      <i className="ri-eye-line text-lg" />
    </Button>
  );
};

export const EditAction = ({ row }) => (
  <Button variant="greenbutton" title="Edit">
    <i className="ri-edit-2-line text-lg" />
  </Button>
);

export const BlockAction = ({ row }) => (
  <Button variant="redbutton" title="Block">
    <i className="ri-forbid-2-line text-lg" />
  </Button>
);

/* Add Invoice */
export const InvoiceAction = ({ row }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(``)}
      variant="greenbutton"
      title="Add Invoice"
    >
      <i className="ri-add-circle-line text-lg" />
      <span className="text-xs font-medium">Invoice</span>
    </Button>
  );
};

export const DeleteAction = ({ row }) => (
  <Button
    onClick={() => console.log("Delete", row.id)}
   variant="redbutton"
    title="Delete"
  >
    <i className="ri-delete-bin-6-line text-lg" />
  </Button>
);

/* More (3 dots) */
export const MoreAction = ({ row }) => (
  <Button
    onClick={() => console.log("More options", row.id)}
    variant="outline"
    className="border-none"
    title="More"
  >
    <i className="ri-more-2-fill text-lg" />
  </Button>
);

export const Download = ({ row }) => (
  <Button
    onClick={() => console.log("More options", row.id)}
    variant="greenbutton"
    title="More"
  >
    <i className="ri-download-2-line text-lg" />
  </Button>
);

export const MoreActions = ({ row }) => (
  <Button className="text-xl text-gray-500 hover:text-gray-800">
    ⋯
  </Button>
);
