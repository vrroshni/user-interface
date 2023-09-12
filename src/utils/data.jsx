import { BiCheckDouble, BiSolidDashboard } from 'react-icons/bi'
import { PiPottedPlantDuotone } from 'react-icons/pi'
import { BsCloudArrowUp, BsPerson, BsPuzzleFill } from 'react-icons/bs'
import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'


export const dashboardplans =
    [
        {
            title: "Basic",
            priceMonthly: "$89.99",
            priceYearly: "$9.99",
            features: [
                {
                    icon: <BsPerson size={24} />,
                    feature: "Upto 25 Users"
                },
                {
                    icon: <BsCloudArrowUp size={24} />,
                    feature: "Upto 25gb Storage"
                },
                {
                    icon: <AiOutlineMail size={24} />,
                    feature: "Email Support"
                }
                ,
            ],
            btncolor: "bg-yellow-200 hover:bg-yellow-500 focus:ring-yellow-200",
            symbolcolor: "text-yellow-400"
        },
        {
            title: "Standard",
            priceMonthly: "$189.99",
            priceYearly: "$999.99",
            features: [
                {
                    icon: <BsPerson size={24} />,
                    feature: "Upto 50 Users"
                },
                {
                    icon: <BsCloudArrowUp size={24} />,
                    feature: "Upto 60gb Storage"
                },
                {
                    icon: <AiOutlineMail size={24} />,
                    feature: "Email+Chat Support"
                }
                ,
            ],
            btncolor: "bg-red-200 hover:bg-red-500 focus:ring-red-200",
            symbolcolor: "text-red-400"
        },
        {
            title: "Premium",
            priceMonthly: "$389.99",
            priceYearly: "$199.99",
            features: [
                {
                    icon: <BsPerson size={24} />,
                    feature: "Upto 75 Users"
                },
                {
                    icon: <BsCloudArrowUp size={24} />,
                    feature: "Upto 100gb Storage"
                },
                {
                    icon: <AiOutlineMail size={24} />,
                    feature: "Email+Chat+Whatsapp Support"
                }
                ,
            ],
            btncolor: "bg-purple-300 hover:bg-purple-500 focus:ring-purple-200",
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
            buttonColor: "bg-lime-200 hover:bg-lime-500 focus:ring-lime-200",
            features: [
                {
                    icon: <BsPerson size={24} />,
                    feature: "Upto 8 Users"
                },
                {
                    icon: <BsCloudArrowUp size={24} />,
                    feature: "Upto 3gb Storage"
                },
                {
                    icon: <AiOutlineMail size={24} />,
                    feature: "Email Support"
                },
                {
                    icon: <BiCheckDouble size={24} />,
                    feature: "Basics of Documents,Task Flow,Voting,Accounting and Team management included"
                }
                ,
            ],
        },
        {
            id: 2,
            title: "Entire Plan",
            description: "Effortlessely customize and fine-tune services as your needs shift,ensuring the perfect tools for success",
            price: "Let's Connect",
            buttonText: "Contact Us",
            buttonColor: "bg-blue-300 hover:bg-blue-500 focus:ring-blue-200",
            features: [
                {
                    icon: <BsPerson size={24} />,
                    feature: "More than 75 Users"
                },
                {
                    icon: <BiCheckDouble size={24} />,
                    feature: "Customization of all other features"
                }
                ,
            ],
        },

    ]



export const menus = [
    {
        id: 1,
        icon: <BiSolidDashboard size={26} />,
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: <PiPottedPlantDuotone size={26} />,
        title: 'Perks',
    },
    {
        id: 3,
        icon: <BsPuzzleFill size={26} />,
        title: 'Addons',
    },
    {
        id: 4,
        icon: <HiMiniChatBubbleLeftRight size={26} />,
        title: 'FAQ',
    },
    {
        id: 5,
        icon: <MdOutlineSupportAgent size={26} />,
        title: 'Support',
    },
];

