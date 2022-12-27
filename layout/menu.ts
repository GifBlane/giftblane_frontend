// In the menu.ts file:

// Define the MenuItem interface
interface MenuItem {
    label: string
    href: string
    submenu?: MenuItem[]
  }
  
  // Define the menu array
  const menu: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/table' },
    {
      label: 'Settings',
      href: '/settings',
      submenu: [
        { label: 'Profile', href: '/settings/profile' },
        { label: 'Account', href: '/settings/account' },
      ],
    },
    {
      label: 'Reports',
      href: '/reports',
      submenu: [
        { label: 'Performance', href: '/reports/performance' },
        { label: 'Sales', href: '/reports/sales' },
        { label: 'Customers', href: '/reports/customers' },
      ],
    },
    { label: 'Help', href: '/help' },
  ]
  
  // Add a new submenu item to the "Reports" menu
  menu[3].submenu.push({ label: 'Inventory', href: '/reports/inventory' })
  
  // Export the MenuItem interface and the menu array using the 'export type' syntax
  export  { type MenuItem, menu }
  
  
