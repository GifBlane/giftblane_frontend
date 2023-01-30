// In the menu.ts file:

// Define the MenuItem interface
interface Menus {
  id: number
    title: string
    href: string
    submenu?: boolean
    submenulv2?: boolean
    submenuItems? : Menus[]
    submenuItemslv2? : Menus[]
    spacing?: boolean
  }
  
  // Define the menu array
  const menu: Menus[] = [

    // Id is used to identify the menu item in the menu component
    // Example
    // id:1 is used to identify the first menu item in the menu component
    // id:12 is used to identify the first submenu item in the first menu item in the menu component
    // id:213 is used to identify the second submenu item in the first submenu item in the second menu item in the menu component

    // Title is used to display the menu item in the menu component
    // Href is used to navigate to the route when the menu item is clicked
    // Submenu is used to display the submenu when the menu item is clicked
    // SubmenuItems is used to display the submenu items in the submenu
    // Spacing is used to add spacing between the menu items
    // The menu array is exported using the 'export type' syntax
    // This is because the menu array is used in the menu component



    { id: 1,
      title: 'Usuario', 
      href: '#', 
      submenu: true,
      submenulv2: false,
      submenuItems: [
        { id:12, title: 'Crear Usuario', href: '/createtable' },
        { id:13, title: 'Mostar Lista De Usuarios', href: '/table' },

      ],
    },

    { 
    id: 2,
    title: 'Tarjetas', 
    href: '#', 
    submenu: true,
    submenulv2: true,
    submenuItems: [
      { id:21, title: 'Pines', href: '#',
      submenu: true,
      submenulv2: false,
      spacing:true,
      submenuItemslv2: [
        { id:212, title: 'Crear Pines', href: '#' },
        { id:213, title: 'Listar Pines', href: '#' },
        { id:214, title: 'Imprimir Pines', href: '#' },
        ],
      },
      { id:23, title: 'Recargar Tarjetas', href: '#' },
    ],
  },
    
    {
      id: 3,
      title: 'Settings',
      href: '#',
      submenu: true,
      submenulv2: false,
      submenuItems: [
        { id:31, title: 'Profile', href: '#' },
        { id:32, title: 'Account', href: '#' },
      ],
    },

    { id:4, title: 'Cerrar Seccion', href: '/login' },
  ]
  

  
  // Export the MenuItem interface and the menu array using the 'export type' syntax
  export  { type Menus, menu }
  
  
