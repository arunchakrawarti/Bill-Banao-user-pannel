import Badge from "@/components/common/Badge";
import {
  ViewAction,
  InvoiceAction,
  DeleteAction,
  MoreAction,
} from "@/components/atoms/Icons";

export const clientColumns = [
  { label: "S.No", key: "id" },
  {
    label: "Name",
    key: "name",
    render: (val, row) => (
      <div>
        <p className="font-medium">{row.name}</p>
        <p className="text-xs text-gray-500">{row.email}</p>
      </div>
    ),
  },
  { label: "Phone", key: "phone" },
  {
    label: "Balance",
    key: "balance",
    render: (val) => (
      <span
        className={
          val > 0 ? "text-red-500 font-medium" : "text-green-600 font-medium"
        }
      >
        ₹{Math.abs(val).toLocaleString()}
      </span>
    ),
  },
  { label: "Total Invoice", key: "invoice" },
  { label: "Created", key: "created" },
];

export const clientData = [
  {
    id: 1,
    name: "ABC Corporation",
    email: "abc@gmail.com",
    phone: "+1234 567 890",
    balance: 5200,
    invoice: 2,
    created: "23-Nov-2023",
    route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
  {
    id: 2,
    name: "Nova Pvt Ltd",
    email: "nova@gmail.com",
    phone: "+1234 567 891",
    balance: -1200,
    invoice: 1,
    created: "23-Nov-2023",
     route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Inactive" />,
  },
  {
    id: 3,
    name: "Tech Solutions",
    email: "tech@gmail.com",
    phone: "+1234 567 892",
    balance: 7800,
    invoice: 5,
    created: "23-Nov-2023",
     route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
  {
    id: 4,
    name: "Bright Media",
    email: "bright@gmail.com",
    phone: "+1234 567 893",
    balance: 3500,
    invoice: 3,
    created: "23-Nov-2023",
     route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
  {
    id: 5,
    name: "Pixel Studio",
    email: "pixel@gmail.com",
    phone: "+1234 567 894",
    balance: -900,
    invoice: 1,
    created: "23-Nov-2023",
    route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Inactive" />,
  },
  {
    id: 6,
    name: "Skyline Corp",
    email: "skyline@gmail.com",
    phone: "+1234 567 895",
    balance: 2200,
    invoice: 2,
    created: "23-Nov-2023",
     route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
  {
    id: 7,
    name: "NextGen IT",
    email: "nextgen@gmail.com",
    phone: "+1234 567 896",
    balance: 15400,
    invoice: 6,
    created: "23-Nov-2023",
     route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
  {
    id: 8,
    name: "Urban Designs",
    email: "urban@gmail.com",
    phone: "+1234 567 897",
    balance: -2100,
    invoice: 2,
    created: "23-Nov-2023",
     route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Inactive" />,
  },
  {
    id: 9,
    name: "CodeCrafters",
    email: "codecrafters@gmail.com",
    phone: "+1234 567 898",
    balance: 8700,
    invoice: 4,
    created: "23-Nov-2023",
    route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
  {
    id: 10,
    name: "Digital Wave",
    email: "digital@gmail.com",
    phone: "+1234 567 899",
    balance: 1200,
    invoice: 1,
    created: "23-Nov-2023",
    route: "/client-management/clients-details/[clientId]",
    status: <Badge text="Active" />,
  },
];


export const clientActions = [
  ViewAction,
  InvoiceAction,
  DeleteAction,
  MoreAction,
];
