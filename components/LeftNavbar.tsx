import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { Menus } from "../layout/menu";
import { CSSProperties } from "react";

import { BsChevronDown } from "react-icons/bs";

const LeftNavbar = ({ menu }: { menu: Menus[] }) => {
	// Initialize the state for the dropdown menus
	const [submenuOpen, setsubmenuOpen] = useState({});
	const [submenuOpenlv2, setsubmenuOpenlv2] = useState({});

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
			<div className="">
				<ul className="pt-2">
					{/* Map through the menu items */}
					{menu.map((menu, index) => (
						<>
							{/* Add the submenuOpen state to the li element */}
							<li
								key={index}
								className={`text-gray-800 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white  mt-2 border-b-[1px] border-slate-600 ${
									menu.spacing ? "mt-9" : "mt-2"
								} `}
							>
								{/* // Add the submenuOpen state to the div element */}
								<div
									className="flex flex-row justify-between w-full"
									onClick={() =>
										setsubmenuOpen({
											...submenuOpen,
											[index]: !submenuOpen[index],
										})
									} // Toggle the submenuOpen state*/}
								>
									<div>
										<span className="text-base font-medum flex-1 ">
											<Link href={menu.href}>{menu.title}</Link>
										</span>
									</div>
									<div className="flex flex-1 items-center justify-evenly ">
										{menu.submenu && (
											<BsChevronDown
												className={`  ${submenuOpen[index] && "rotate-180"}`}
												onClick={() =>
													setsubmenuOpen({
														...submenuOpen,
														[index]: !submenuOpen[index],
													})
												}
											/>
										)}
									</div>
								</div>
							</li>
							{menu.submenu && submenuOpen[index] && (
								<ul className="">
									{menu.submenuItems.map((submenuItems, index) => (
										<li
											key={index}
											className="text-gray-800 text-sm flex items-center cursor-pointer p-2 px-10 hover:bg-light-white mt-2 border-b-[1px] border-slate-600 "
											onClick={() =>
												setsubmenuOpenlv2({
													...submenuOpenlv2,
													[index]: !submenuOpenlv2[index],
												})
											}
										>
											<div>
												<span className="">
													<Link href={submenuItems.href}>
														{submenuItems.title}
													</Link>
												</span>
											</div>
											<div className="flex flex-1 items-center justify-evenly ">
												{submenuItems.submenu && (
													<BsChevronDown
														className={`  ${
															submenuOpenlv2[index] && "rotate-180"
														}`}
													/>
												)}
											</div>
											{/* Conditionally render the sub-submenu items */}

											{submenuItems.submenuItemslv2 &&
												submenuOpenlv2[index] && (
													<ul className="">
														{submenuItems.submenuItemslv2.map(
															(submenuItemslv2, index) => (
																<li
																	key={index}
																	className={`border-b-[1px] border-slate-600 
																	} `}
																>
																	<span className="text-base font-medium flex-1 ">
																		<Link href={submenuItemslv2.href}>
																			{submenuItemslv2.title}
																		</Link>
																	</span>
																</li>
															)
														)}
													</ul>
												)}
										</li>
									))}
								</ul>
							)}
						</>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default LeftNavbar;
