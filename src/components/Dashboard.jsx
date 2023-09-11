import React from 'react'
import PricingCard, { BundleCard, bundleplans, dashboardplans } from './elements/DashboardElements';
import { BsArrowRight, BsPerson } from 'react-icons/bs';

const Dashboard = () => {
  return (

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
              btncolor={item.btncolor}
              symbolcolor={item.symbolcolor}
            />
          ))}

        </div>
        <div class="flex flex-col lg:flex-row">
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
      </div>
    </div>

  )
}

export default Dashboard