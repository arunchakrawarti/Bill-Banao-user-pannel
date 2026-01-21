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
        route: "/sale-invoice/sale",
      },
      {
        label: "E-Invoice",
        route: "/sale-invoice/e-invoice",
      },
      {
        label: "Sale return",
        route: "/sale-invoice/sale-return",
      },
      {
        label: "Eway Bill",
        route: "/sale-invoice/eway-bill",
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
        route: "/purchase/purchase-return",
      },
      {
        label: "Purchase Order",
        route: "/purchase/purchase-order",
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
