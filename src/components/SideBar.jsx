import React, { useEffect, useState } from "react";
import { MenuItem, Menus } from "./elements/helpers";
import { BiSolidDashboard } from "react-icons/bi";
import Dashboard from "./Dashboard";
import RightBar from "./RightBar";

const SideBar = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOpen(false)
            } else {
                setOpen(true)
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex h-auto">
            <div className={` ${open ? "w-44 p-0" : "w-20  p-5 "} bg-white pt-8 relative duration-300 shadow-lg`}>
                <img src="./src/assets/control.png" className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className={`flex flex-col gap-x-4 items-center ${open && "shadow-xl pb-4"}`} >
                    <div className="md:hidden w-12 h-12  flex flex-col justify-center items-center mb-5">
                        <img className={`cursor-pointer duration-500 ${open && "rounded-full border border-gray-100 shadow-sm rotate-[360deg]"}`}
                            src="https://www.pivotical.social/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.58ca0829.png&w=384&q=100"
                            alt="user image" />
                    </div>
                    <div className=" w-12 h-12  flex flex-col justify-center items-center">
                        <img className={`cursor-pointer duration-500 rounded-full ${open && " border border-gray-100 shadow-sm rotate-[360deg]"}`} src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
                    </div>
                    <p className={`text-black origin-left font-medium text-xl duration-200  ${!open && "scale-0"}`} >
                        Designer <span className="text-blue-600 font-extrabold">&#62;</span>
                    </p>
                    <p className={`text-black font-normal text-sm ${!open && "scale-0"}`}>
                        rammohan2@gmail.com
                    </p>
                </div>

                <div className={`pt-6 ${open && "mr-6"}`}>
                    {Menus.map((Menu, index) => (
                        <MenuItem
                            key={Menu.id}
                            icon={Menu.icon}
                            title={Menu.title}
                            open={open}
                        />
                    ))}
                </div>

                <div className={`absolute bottom-0 ${open && "w-full"} `}>
                    <MenuItem
                        icon={<BiSolidDashboard size={26} />}
                        title={"Xyz EnterPrises Pvt. Ltd"}
                        open={open}
                        classNames={"md:hidden  text-blue-800"}
                    />
                    <MenuItem
                        icon={<BiSolidDashboard size={26} />}
                        title={"Logout"}
                        open={open}
                        classNames={" text-blue-800 mr-0"}
                    />
                </div>
            </div>
            <div className="flex-1 bg-white mr-3  md:mr-7">
                <Dashboard />

            </div>
            <div className="mt-3">
                <RightBar/>
            </div>
        </div>
    );
};

export default SideBar;
