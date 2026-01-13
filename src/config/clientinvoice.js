import Badge from "@/components/common/Badge";
import {
  ViewAction,
  Download,
  MoreAction,
} from "@/components/atoms/Icons";


import Profile from "@/components/common/Profile";

export const clientInvoiceColumns = [
  {
    label: "",
    key: "select",
    render: () => (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300"
      />
    ),
  },
  { label: "INVOICE NO.", key: "invoiceNo" },
  {
    label: "INVOICE TO",
    key: "customer",
    render: (v) => (
      <Profile
        icon={v.avatar}
        name={v.name}
        desc={v.phone}
        route={v.route}
        size="sm"
      />
    ),
  },
  { label: "CREATED ON", key: "createdOn" },
  {
    label: "TOTAL",
    key: "total",
    render: (v) => <span className="font-semibold">₹{v}</span>,
  },
  {
    label: "PAID",
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
  { label: "STATUS", key: "status" },
];



export const clientInvoiceData = [
  {
    id: 1,
    route: "/sale-invoice/inv-2024-001",
    invoiceNo: "INV-2024-001",
    customer: {
      name: "John",
      phone: "+5437272829",
      avatar: "🧑",
      route: "/clients/john",
    },
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Cash",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Paid" variant="success" />,
  },
  {
    id: 2,
    route: "/sale-invoice/inv-2024-002",
    invoiceNo: "INV-2024-002",
    customer: {
      name: "John",
      phone: "+5437272829",
      avatar: "🧑",
      route: "/clients/john",
    },
    createdOn: "2024-01-16",
    total: 8000,
    paid: 5000,
    paymentMode: "UPI",
    balance: 3000,
    dueDate: "2024-02-18",
    status: <Badge text="Paid" variant="success" />,
  },
   {
    id: 1,
    route: "/sale-invoice/inv-2024-001",
    invoiceNo: "INV-2024-001",
    customer: {
      name: "John",
      phone: "+5437272829",
      avatar: "🧑",
      route: "/clients/john",
    },
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Cash",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Paid" variant="success" />,
  },
   {
    id: 1,
    route: "/sale-invoice/inv-2024-001",
    invoiceNo: "INV-2024-001",
    customer: {
      name: "John",
      phone: "+5437272829",
      avatar: "🧑",
      route: "/clients/john",
    },
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Cash",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Paid" variant="success" />,
  },
   {
    id: 1,
    route: "/sale-invoice/inv-2024-001",
    invoiceNo: "INV-2024-001",
    customer: {
      name: "John",
      phone: "+5437272829",
      avatar: "🧑",
      route: "/clients/john",
    },
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Cash",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Paid" variant="success" />,
  },
   {
    id: 1,
    route: "/sale-invoice/inv-2024-001",
    invoiceNo: "INV-2024-001",
    customer: {
      name: "John",
      phone: "+5437272829",
      avatar: "🧑",
      route: "/clients/john",
    },
    createdOn: "2024-01-15",
    total: 5000,
    paid: 5000,
    paymentMode: "Cash",
    balance: 0,
    dueDate: "2024-02-15",
    status: <Badge text="Paid" variant="success" />,
  },
  
];


export const clientInvoiceActions = [
  ViewAction,
  Download,
  MoreAction,
];
