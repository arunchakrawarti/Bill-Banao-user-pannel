export const SideBarData = [
  {
    label: "Dashboard",
    heroIcon: "ri-dashboard-line",
    route: "/",
  },
  {
    label: "Client Management",
    heroIcon: "ri-group-line",
    route: "/client-management",
    hasChildren: true,
    subMenu: [
      {
        label: "Add Clients",
        route: "/client-management/add-client",
      },
      {
        label: "Client Details",
        route: "/client-management/clients-details",
      },
    ],
  },
  {
    label: "Invoices",
    heroIcon: "ri-coin-line",
    route: "/sale-invoice",
    hasChildren: true,
    subMenu: [
      {
        label: "Sale report",
        route: "/sale-invoice/sale-report",
      },
      {
        label: "Invoice-templates",
        route: "/sale-invoice/invoice-templates",
      },
      {
        label: "Sale",
        route: "",
      },
      {
        label: "E-Invoice",
        route: "",
      },
      {
        label: "Sale return",
        route: "",
      },
      {
        label: "Eway Bill",
        route: "",
      },
    ],
  },
  {
    label: "Purchase",
    heroIcon: "ri-wallet-3-line",
    route: "/Purchase",
    hasChildren: true,
    subMenu: [
      {
        label: "Purchase Report",
        route: "/purchase/purchase-report",
      },
      {
        label: "Purchase Return",
        route: "",
      },
      {
        label: "Purchase Order",
        route: "",
      },
      {
        label: "Add Purchase",
        route: "/purchase/add-purchase",
      },
    ]
  },
  {
    label: "Tax calculation",
    heroIcon: "ri-live-line",
    route: "/tax-calculation",
  },
  {
    label: "Settings",
    heroIcon: "ri-live-line",
    route: "/settings",
  },

];
