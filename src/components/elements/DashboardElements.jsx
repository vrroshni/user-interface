import { BsArrowRight, BsPerson } from 'react-icons/bs';
import { HiMiniPlay } from 'react-icons/hi2';

/**
 * PricingCard component displays subscription plan details.
 *
 * @param {string} btncolor - Button background color.
 * @param {string} title - Plan title.
 * @param {string} priceMonthly - Monthly price.
 * @param {string} priceYearly - Yearly price.
 * @param {Array} features - Array of plan features and icons.
 * @param {string} symbolcolor - Color for additional symbol.
 * @returns {JSX.Element} JSX element for the PricingCard component.
 */

export const PricingCard = ({ btncolor, title, priceMonthly, priceYearly, features, symbolcolor }) => {
    return (
        <div className="bg-white shadow-xl rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 mx-4 my-2">
            <div className="flex items-center justify-center w-full">
                <div className="flex-col w-[85%]">
                    <span className="text-4xl font-bold text-black my-1">{title}</span>
                    <p className="text-xl font-normal text-black my-1 strikethrough w-fit">{priceMonthly}/mo</p>
                    <p className="text-4xl font-medium text-black my-1">{priceYearly}<span className='text-3xl font-normal'>/mo</span></p>
                    <button type="button" className={`${btncolor} focus:outline-none text-black  focus:ring-4  font-medium rounded-lg text-sm px-5 py-1.5 my-2 flex justify-center items-center gap-2 `}>Get Started <BsArrowRight /></button>
                    <hr className='bg-black border h-0.5 my-4' />
                    <div>
                        <p className="text-lg">What you'll get :</p>
                        <div className='flex flex-col gap-y-1 pl-1 font-medium pt-1'>
                            {features?.map(({ feature, icon }, index) => (
                                <p className='flex gap-3 items-center text-base  text-left  ' key={index}>
                                    {icon}
                                    <span>{feature}</span>
                                </p>
                            ))}
                        </div>
                        <div className='cursor-pointer p-5 flex justify-center items-center  gap-2'>
                            <span className='underline font-semibold text-lg hover:text-gray-700'>EXPLORE FEATURES</span>
                            <HiMiniPlay className={symbolcolor} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;


/**
 * BundleCard component displays bundled plan details.
 *
 * @param {string} title - Bundle title.
 * @param {string} description - Bundle description.
 * @param {string} price - Bundle price.
 * @param {string} buttonText - Action button text.
 * @param {string} buttonColor - Action button background color.
 * @param {Array} features - Array of bundled features and icons.
 * @returns {JSX.Element} JSX element for the BundleCard component.
 */


export const BundleCard = ({ title, description, price, buttonText, buttonColor, features }) => {
    return (
        <div className="bg-white shadow-xl rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
            <div className="flex flex-col md:flex-row items-center justify-start w-full px-2 gap-4">
                <div className='flex-col w-full md:w-[55%]'>
                    <div className="flex items-center justify-between px-0.5 py-0.5 rounded-xl text-black font-medium mb-2 md:mb-0">
                        <div className={`text-xs px-2 rounded-lg py-1 ${buttonColor}`}>{price}</div>
                    </div>
                    <span className="text-4xl font-bold text-black my-1">{title}</span>
                    <p className='text-sm text-left font-medium py-2'>
                        {description}
                    </p>
                    <button
                        type="button"
                        className={`${buttonColor}  focus:outline-none text-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-1.5 my-2 flex justify-center items-center gap-2`}
                    >
                        {buttonText} <BsArrowRight />
                    </button>
                </div>
                <div className='flex-col w-full md:w-[45%]'>
                    <p className="text-lg">What you'll get :</p>
                    <div className=' flex flex-col gap-y-2  md:gap-y-1 font-medium mt-2 text-base'>
                        {features.map(({feature,icon}, index) => (
                            <div className=' flex gap-x-3  md:gap-5 text-base md:text-sm text-left ' key={index}>
                               <div className='w-4 h-4'> {icon}</div>
                               <div>{feature}</div> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



