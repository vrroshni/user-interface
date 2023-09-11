import {BiSolidDashboard } from 'react-icons/bi'



export const MenuItem = ({  icon, title, open, classNames = "rounded-r-lg text-gray-300" }) => (

    <div
        className={`${classNames}  flex  p-2 border border-solid border-gray-200 hover:bg-blue-300 cursor-pointer bg-white  text-gray-300 items-center gap-x-4 mt-2 capitalize font-medium text-base`} >
        <span className='text-blue-800 '>{icon}</span>
        <span className={`${!open && "hidden"} text-black origin-left duration-200`}>
            {title}
        </span>
    </div>
);


export const Menus = [
    {
        id: 1,
        icon: <BiSolidDashboard size={26} />,
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: <BiSolidDashboard size={26} />,
        title: 'Item 2',
    },
    {
        id: 3,
        icon: <BiSolidDashboard size={26} />,
        title: 'Item 3',
    },
    {
        id: 4,
        icon: <BiSolidDashboard size={26} />,
        title: 'Item 4',
    },
    {
        id: 5,
        icon: <BiSolidDashboard size={26} />,
        title: 'Item 5',
    },
];