import React from 'react'
import PricingCard, { BundleCard} from './elements/DashboardElements';
import Heading from './elements/Heading';
import { bundleplans, dashboardplans } from '../utils/data';

const Dashboard = () => {
  return (

    <div className="flex items-center justify-center bg-white p-1 md:p-4">
      <div className="flex flex-col max-w-7xl w-full md:w-[90%] mt-3 md:mt-0 ">
      <Heading text='Choose a plan thats just right for you' className='!text-3xl md:!text-4xl !text-left font-bold my-3 mx-4 ' />
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
        <div className='mt-1 text-blue-700 flex justify-end mx-4'>
          *voluptatibus deleniti incidunt est tempore iste voluptas quia. Rem enim fugiat nesciunt odit?
        </div>

      </div>
    </div>

  )
}

export default Dashboard