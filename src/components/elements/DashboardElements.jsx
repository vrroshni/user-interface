import { BsArrowRight, BsPerson } from 'react-icons/bs';
import { HiMiniPlay } from 'react-icons/hi2';



export const dashboardplans =
    [
        {
            title: "Basic",
            priceMonthly: "$9.99",
            priceYearly: "$89.99",
            features: ["Upto 25 Users", "Feature 2", "Feature 3"],
            btncolor: "bg-yellow-200 hover:bg-yellow-500 focus:ring-yellow-200",
            symbolcolor: "text-yellow-400"
        },
        {
            title: "Standard",
            priceMonthly: "$19.99",
            priceYearly: "$179.99",
            features: ["Upto 50 Users", "Feature 2", "Feature 3"],
            btncolor: "bg-red-200 hover:bg-red-500 focus:ring-red-200",
            symbolcolor: "text-red-400"
        },
        {
            title: "Premium",
            priceMonthly: "$29.99",
            priceYearly: "$269.99",
            features: ["Upto 100 Users", "Feature 2", "Feature 3"],
            btncolor: "bg-purple-200 hover:bg-purple-500 focus:ring-purple-200",
            symbolcolor: "text-purple-400"
        }
    ]

export const bundleplans =
    [
        {
            id: 1,
            title: "Free Starter",
            description: "The quickest and easiest way to try Protocols with basic functionalities",
            price: "Free Forever",
            buttonText: "Get Started",
            buttonColor: "bg-red-200 hover:bg-red-500 focus:ring-red-200",
            features: [
                "Upto 25 Users",
                "Feature 2",
                "Feature 3"
            ]
        },
        {
            id: 2,
            title: "Entire Plan",
            description: "The quickest and easiest way to try Protocols with basic functionalities",
            price: "Free Forever",
            buttonText: "Get Started",
            buttonColor: "bg-red-200 hover:bg-red-500 focus:ring-red-200",
            features: [
                "Upto 25 Users",
                "Feature 2",
                "Feature 3"
            ]
        },

    ]

export const PricingCard = ({ btncolor, title, priceMonthly, priceYearly, features, symbolcolor }) => {

    return (
        <div className="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 mx-4 my-2">
            <div className="flex items-center justify-center w-full">
                <div className="flex-col w-[85%]">
                    <span className="text-4xl font-bold text-black my-1">{title}</span>
                    <p className="text-xl font-normal text-black my-1">{priceMonthly}/mo</p>
                    <p className="text-4xl font-medium text-black my-1">{priceYearly}<span className='text-3xl font-normal'>/yr</span></p>
                    <button type="button" className={`${btncolor} focus:outline-none text-black  focus:ring-4  font-medium rounded-lg text-sm px-5 py-1.5 my-2 flex justify-center items-center gap-2 `}>Get Started <BsArrowRight /></button>
                    <hr className='bg-black border h-0.5 my-4' />
                    <div>
                        <p>What you'll get :</p>
                        <div className='flex flex-col gap-y-1 pl-1 font-medium pt-1'>
                            {features.map((feature, index) => (
                                <p className='flex gap-3 text-sm text-left ' key={index}><BsPerson /> <span>{feature}</span></p>
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




export const BundleCard = ({ title, description,price, buttonText, buttonColor, features }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
            <div className="flex items-center justify-start w-full gap-4">
                <div className='flex-col w-[60%]'>
                    <div className="flex items-center justify-between px-0.5 py-0.5 rounded-xl text-green-500 font-medium">
                        <div className="text-xs bg-green-200 px-2 rounded-lg py-1">{price}</div>
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
                <div className='flex-col w-[40%]'>
                    <p>What you'll get :</p>
                    <div className=' flex flex-col gap-y-1 font-medium mt-2'>
                        {features.map((feature, index) => (
                            <p className=' flex gap-3 text-sm text-left' key={index}>
                                <BsPerson size={26} />
                                {feature}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



