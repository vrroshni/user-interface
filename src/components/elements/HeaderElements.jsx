import { BiSolidChevronDown } from 'react-icons/bi';


export const Logo = () => {
    return (
        <div>
            <div className="w-56 h-full relative">
                <div className="absolute -left-10 inset-0 bg-white shadow-lg transform" style={{ transform: "skew(-40deg, 0deg)" }}></div>

            </div>
            <div className=" absolute top-5 left-6">
                <img src="https://www.pivotical.social/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.58ca0829.png&w=384&q=100" alt="" className="h-20" />
            </div>
        </div>)
}



export const CompanyName = () => {
    return (
        <div className="hidden md:flex gap-4 items-center justify-center px-7 absolute top-8 right-14">
            <div className="w-fit bg-white shadow-lg h-12 px-4 py-2 gap-4 rounded-lg  flex items-center justify-center">
                <div className=" w-12 h-12">
                    <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
                </div>
                <div className="font-bold font-sans">
                    Xyz EnterPrises Pvt. Ltd
                </div>
            </div>
            <div className='bg-white shadow-lg w-11 h-12 flex justify-center items-center rounded-lg '>
                <BiSolidChevronDown />
            </div>
        </div>)
}
