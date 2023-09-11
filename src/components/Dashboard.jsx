import React from 'react'
import PricingCard, { dashboardplans } from './elements/DashboardElements';

const Dashboard = () => {
  return (
    // <div class="flex items-center justify-center bg-white  p-4">
    //   <div class="flex flex-col max-w-7xl w-full md:w-[80%]">
    //     <div class="flex flex-col lg:flex-row">
    //       <div class="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4  mx-4 my-2 z-10">
    //         <div class="flex items-center justify-center w-full">
    //           <div class="flex-col w-[85%]">
    //             <span class="text-4xl font-bold text-black my-1">Basic</span>
    //             <p class="text-xl font-normal text-black my-1">$ 89.99/mo</p>
    //             <p class="text-4xl font-medium text-black my-1">$ 9.99<span className='text-3xl font-normal'>/mo</span></p>
    //             <button type="button" class="focus:outline-none text-black bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-1.5 my-2  flex justify-center items-center gap-2 ">Get Started <BsArrowRight /> </button>
    //             <hr className='bg-black border h-0.5 my-4' />
    //             <div>
    //               <p>What you'll get :</p>
    //               <div className='flex flex-col gap-y-1 pl-1 font-medium pt-1'>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //               </div>
    //               <div className='cursor-pointer p-5'>
    //                 <span className='underline font-semibold text-lg hover:text-gray-700  '>EXPLORE FEATURES</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4  mx-4 my-2">
    //         <div class="flex items-center justify-center w-full">
    //           <div class="flex-col w-[85%]">
    //             <span class="text-4xl font-bold text-black my-1">Basic</span>
    //             <p class="text-xl font-normal text-black my-1">$ 89.99/mo</p>
    //             <p class="text-4xl font-medium text-black my-1">$ 9.99<span className='text-3xl font-normal'>/mo</span></p>
    //             <button type="button" class="focus:outline-none text-black bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-1.5 my-2  flex justify-center items-center gap-2 ">Get Started <BsArrowRight /> </button>
    //             <hr className='bg-black border h-0.5 my-4' />
    //             <div>
    //               <p>What you'll get :</p>
    //               <div className='flex flex-col gap-y-1 pl-1 font-medium pt-1'>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //               </div>
    //               <div className='cursor-pointer p-5'>
    //                 <span className='underline font-semibold text-lg hover:text-gray-700  '>EXPLORE FEATURES</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4  mx-4 my-2">
    //         <div class="flex items-center justify-center w-full">
    //           <div class="flex-col w-[85%]">
    //             <span class="text-4xl font-bold text-black my-1">Basic</span>
    //             <p class="text-xl font-normal text-black my-1">$ 89.99/mo</p>
    //             <p class="text-4xl font-medium text-black my-1">$ 9.99<span className='text-3xl font-normal'>/mo</span></p>
    //             <button type="button" class="focus:outline-none text-black bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-1.5 my-2  flex justify-center items-center gap-2 ">Get Started <BsArrowRight /> </button>
    //             <hr className='bg-black border h-0.5 my-4' />
    //             <div>
    //               <p>What you'll get :</p>
    //               <div className='flex flex-col gap-y-1 pl-1 font-medium pt-1'>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //                 <p className='flex items-center  gap-3'><BsPerson /> <span>Upto 25 Users </span></p>
    //               </div>
    //               <div className='cursor-pointer p-5'>
    //                 <span className='underline font-semibold text-lg hover:text-gray-700  '>EXPLORE FEATURES</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center bg-white p-1 md:p-4">
      <div className="flex flex-col max-w-7xl w-full md:w-[80%]">
        <div className="flex flex-col lg:flex-row">
          {dashboardplans.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              priceMonthly={item.priceMonthly}
              priceYearly={item.priceYearly}
              features={item.features}
              btncolor= {item.btncolor}
              symbolcolor={item.symbolcolor}
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Dashboard