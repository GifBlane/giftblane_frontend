// In the menu.ts file:

// Define the MenuItem interface
interface MenuItem {
    label: string
    href: string
    submenu?: MenuItem[]
  }
  
  // Define the menu array
  const menu: MenuItem[] = [
    // { label: 'Usuario', href: '/',      
    //  submenu: [
    //   { label: 'Crear Usuario', href: '/Usuarios/CrearUsuario' },
    //   { label: 'Mostrar Lista De Usuario', href: '/Usuarios/Userlist' },
    // ], },
    { label: 'Usuario', href: '/dashboard' },
    { label: 'Crear Usuario', href: '/createtable' },
    { label: 'Mostar Lista De Usuarios', href: '/table' },
    { label: 'Tarjetas', href: '/table' },
    { label: 'Pines', href: '/table' },
    { label: 'Recargar Tarjetas', href: '/table' },
    { label: 'Automatico', href: '/table' },
    { label: 'Manual', href: '/table' },
    
    // {
    //   label: 'Settings',
    //   href: '/settings',
    //   submenu: [
    //     { label: 'Profile', href: '/settings/profile' },
    //     { label: 'Account', href: '/settings/account' },
    //   ],
    // },
    // {
    //   label: 'Reports',
    //   href: '/reports',
    //   submenu: [
    //     { label: 'Performance', href: '/reports/performance' },
    //     { label: 'Sales', href: '/reports/sales' },
    //     { label: 'Customers', href: '/reports/customers',  },
    //   ],
    // },
    { label: 'Cerrar Seccion', href: '/login' },
  ]
  

  
  // Export the MenuItem interface and the menu array using the 'export type' syntax
  export  { type MenuItem, menu }
  
  
