// src/config/clientOverview.js

export const clientInfo = {
  name: "ABC Corporation",
  email: "contact@abccorp.com",
  phone: "+1 234 567 8901",
  address: "123 Business Street, City, State 12345",
  website: "xyz.com",
};

export const clientStats = [
  {
    title: "Total Invoices",
    value: "₹298",
    icon: "ri-file-list-3-line",
    iconBg: "bg-green-500",
    change: 2,     // ↑
    invoices: 2,
    variant: "detailed",
  },
  {
    title: "Outstandings",
    value: "₹1,298",
    icon: "ri-time-line",
    iconBg: "bg-blue-500",
    change: 2,     // ↑
    invoices: 5,
    variant: "detailed",
  },
  {
    title: "Total Overdue",
    value: "₹598",
    icon: "ri-alarm-warning-line",
    iconBg: "bg-orange-500",
    change: -2,    // ↓
    invoices: 3,
    variant: "detailed",
  },
  {
    title: "Cancelled",
    value: "₹298",
    icon: "ri-close-circle-line",
    iconBg: "bg-red-500",
    change: -1,    // ↓
    invoices: 1,
    variant: "detailed",
  },
  {
    title: "Draft",
    value: "₹498",
    icon: "ri-file-paper-line",
    iconBg: "bg-yellow-500",
    change: -3,    // ↓
    invoices: 4,
    variant: "detailed",
  },
  {
    title: "Recurring",
    value: "₹1,998",
    icon: "ri-repeat-line",
    iconBg: "bg-pink-500",
    change: 4,     // ↑
    invoices: 6,
    variant: "detailed",
  },
];

