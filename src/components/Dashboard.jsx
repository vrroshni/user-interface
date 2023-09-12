import React from 'react'
import PricingCard, { BundleCard } from './elements/DashboardElements';
import Heading from './elements/Heading';
import { bundleplans, dashboardplans } from '../utils/data';

const Dashboard = () => {
  return (

    <div className="flex items-center justify-center bg-white p-1 md:p-4 ">
      <div className="flex flex-col max-w-7xl w-full  lg:w-[97%] xl:w-[90%] mt-3 md:mt-0 ">
        <Heading text='Choose a plan thats just right for you' className='!text-3xl md:!text-4xl !text-left font-bold my-3 mx-4 ' />

        <div className=' p-2  flex justify-center lg:justify-end mx-4 mb-4 cursor-pointer'>
          <div className='border-2 border-black rounded-3xl flex justify-center items-center p-1 gap-4 '>
            <div className='rounded-3xl bg-blue-200 shadow-md px-8 py-1'>
              Monthly
            </div>
            <div className='rounded-3xl px-8 py-1 flex items-center justify-center relative '>
              Anually <span className='text-green-400 absolute top-0 -right-0.5 text-sm'>-10%</span>
            </div>
            <div></div>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-6">
          {dashboardplans?.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              priceMonthly={item.priceMonthly}
              priceYearly={item.priceYearly}
              features={item.features}
              btncolor={item.btncolor}
              symbolcolor={item.symbolcolor}
            />
          ))}

        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-4 ">
          {bundleplans.map((item) => (
            <BundleCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              buttonText={item.buttonText}
              buttonColor={item.buttonColor}
              features={item.features}
            />
          ))}
        </div>
        <div className='mt-1 text-blue-600 flex justify-end mx-4'>
          *some unique features are provided as add-ons with individual plans for each feature
        </div>

      </div>
    </div>

  )
}

export default Dashboard