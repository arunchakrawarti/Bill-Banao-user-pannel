import Badge from "@/components/common/Badge";
import { MoreActions } from "@/components/atoms/Icons";

export const clientInvoiceColumns = [
  {
    label: "",
    key: "select",
    render: () => (
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
    ),
  },
  { label: "INVOICE NO.", key: "invoiceNo" },
  { label: "CATEGORY", key: "category" },
  { label: "CREATED ON", key: "createdOn" },
  {
    label: "TOTAL AMOUNT",
    key: "total",
    render: (v) => <span className="font-semibold">₹{v}</span>,
  },
  {
    label: "PAID AMOUNT",
    key: "paid",
    render: (v) => <span className="text-green-600">₹{v}</span>,
  },
  { label: "PAYMENT MODE", key: "paymentMode" },
  {
    label: "BALANCE",
    key: "balance",
    render: (v) => (
      <span className={v === 0 ? "text-green-600" : "text-red-500"}>
        ₹{v}
      </span>
    ),
  },
  { label: "DUE DATE", key: "dueDate" },
  {
    label: "STATUS",
    key: "status",
  },
];

export const clientInvoiceData = [
  {
    invoiceNo: "INV-2024-001",
    category: "Services",
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Bank Transfer",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Active" />,
  },
  {
    invoiceNo: "INV-2024-002",
    category: "Services",
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Bank Transfer",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Active" />,
  },
  {
    invoiceNo: "INV-2024-003",
    category: "Services",
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Bank Transfer",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Active" />,
  },
];

export const clientInvoiceActions = [MoreActions];
