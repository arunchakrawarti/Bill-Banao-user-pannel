"use client";
import { useRouter } from "next/navigation";


export const ViewAction = ({ row }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(row.route)}
      className="text-blue-600 hover:text-blue-800"
      title="View"
    >
      <i className="ri-eye-line text-lg" />
    </button>
  );
};

export const EditAction = ({ row }) => (
  <button className="text-green-600 hover:text-green-700" title="Edit">
    <i className="ri-edit-2-line text-lg" />
  </button>
);

export const BlockAction = ({ row }) => (
  <button className="text-red-600 hover:text-red-700" title="Block">
    <i className="ri-forbid-2-line text-lg" />
  </button>
);

/* Add Invoice */
export const InvoiceAction = ({ row }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(``)}
      className="flex items-center gap-1 text-emerald-600 bg-emerald-50 rounded-full hover:text-emerald-700 px-2"
      title="Add Invoice"
    >
      <i className="ri-add-circle-line text-lg" />
      <span className="text-xs font-medium">Invoice</span>
    </button>
  );
};

/* Delete */
export const DeleteAction = ({ row }) => (
  <button
    onClick={() => console.log("Delete", row.id)}
    className="text-rose-600 hover:text-rose-700"
    title="Delete"
  >
    <i className="ri-delete-bin-6-line text-lg" />
  </button>
);

/* More (3 dots) */
export const MoreAction = ({ row }) => (
  <button
    onClick={() => console.log("More options", row.id)}
    className="text-gray-500 hover:text-gray-800"
    title="More"
  >
    <i className="ri-more-2-fill text-lg" />
  </button>
);

export const Download = ({ row }) => (
  <button
    onClick={() => console.log("More options", row.id)}
    className="text-green-500 hover:text-green-800"
    title="More"
  >
    <i className="ri-download-2-line text-lg" />
  </button>
);

export const MoreActions = ({ row }) => (
  <button className="text-xl text-gray-500 hover:text-gray-800">
    ⋯
  </button>
);
