import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { MenuItem } from "../layout/menu";

const LeftNavbar = ({ menu }: { menu: MenuItem[] }) => {
  // Initialize the state for the dropdown menus
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  // Toggle the dropdown menu when the menu item is clicked
  const toggleMenu = (label: string) => {
    if (openMenus.includes(label)) {
      setOpenMenus(openMenus.filter((l) => l !== label));
    } else {
      setOpenMenus([...openMenus, label]);
    }
  };

  return (
    <nav className="bg-gray-800 h-screen w-64">
      <div className="py-6 px-4 flex items-center mx-auto">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="User"
          className="h-12 w-12 rounded-full mx-auto"
        />
        <p className="text-white font-bold ml-4">John Doe</p>
      </div>
      {menu.map((item) => (
        <div key={item.label} className="relative">
          {item.submenu ? (
            <>
              <a
                onClick={() => toggleMenu(item.label)}
                className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700
                  focus:outline-none focus:text-white focus:bg-gray-700"
              >
                {item.label}
              </a>
              <div
                className={cn(
                  "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg",
                  { hidden: !openMenus.includes(item.label) }
                )}
              >
                <div className="py-1 rounded-md bg-white shadow-xs">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      legacyBehavior
                    >
                      <a className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        {subitem.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link href={item.href} legacyBehavior>
              <a
                className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700
                        focus:outline-none focus:text-white focus:bg-gray-700"
              >
                {item.label}
              </a>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default LeftNavbar;
