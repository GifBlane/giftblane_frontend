// In the menu.ts file:

// Define the MenuItem interface
interface MenuItem {
    label: string
    href: string
    submenu?: MenuItem[]
  }

  // Define the menu array
  const menu: MenuItem[] = [

    { label: 'Usuario', href: '/dashboard'},
    { label: 'Crear Usuario', href: '/createtable' },
    { label: 'Mostar Lista De Usuarios', href: '/table' },
    { label: 'Tarjetas', href: '/tarjetas' },
    { label: 'Pines', href: '/pines' },
    { label: 'Recargar Tarjetas', href: '/recargar_tarjetas' },
    { label: 'Automatico', href: '/automatico' },
    { label: 'Manual', href: '/manual' },
    {
      label: 'Cerrar Seccion',
      href: '/logout'
      },
      // {
      //   label: 'Parent menu item',
      //   href: '/parent',
      //   submenu: [
      //     {
      //       label: 'Child menu item',
      //       href: '/child',
      //       submenu: [
      //         { label: 'Grandchild menu item', href: '/grandchild' },
      //         { label: 'Another grandchild menu item', href: '/another-grandchild' },
      //       ],
      //     },
      //   ],
      // },
    ];
  
  // Export the MenuItem interface and the menu array using the 'export type' syntax
  export  { type MenuItem, menu }
  
  
