import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { MenuItem } from "../layout/menu";
import { CSSProperties } from "react";

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
  const submenuStyles: CSSProperties = {
    marginTop: "48px", // height of the main menu item
  };

  return (
    <aside className=" h-screen w-64 z-[1] absolute bg-[#fdf6f1]/80">
      <div className="pt-6 mb-10 px-4 flex items-center mx-auto bg-[#D95B60]">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="User"
          className="h-14 mb-6 rounded-l-2xl rounded-r-2xl mx-auto mt-11"
        />
        <p className="text-white font-bold mr-14 mt-4 text-lg ">John Doe</p>
      </div>
      <div className="overflow-y-auto ">
        {menu.map((item) => (
          <div key={item.label} className="relative">
            {item.submenu ? (
              <>
                <a
                  onClick={() => toggleMenu(item.label)}
                  className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-black transition duration-150 ease-in-out  hover:text-white hover:bg-gray-700
                  focus:outline-none focus:text-white focus:bg-gray-700 border-b border-"
                >
                  {item.label}
                </a>
                <div
                  className={cn(
                    "origin-top-right absolute right-0 mt-2 w-48  shadow-lg",
                    { hidden: !openMenus.includes(item.label) }
                  )}
                  style={submenuStyles}
                  id="sidebar-multi-level-example"
                >
                  <div className="py-1  bg-white shadow-xs">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        legacyBehavior
                      >
                        <a className="pl-12 block px-4 py-2 text-sm leading-5 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-b border-gray-700 ">
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
                  className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-black transition duration-150 ease-in-out  hover:text-white hover:bg-gray-700
                        focus:outline-none focus:text-white focus:bg-gray-700 border-b border-gray-700"
                >
                  {item.label}
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LeftNavbar;
