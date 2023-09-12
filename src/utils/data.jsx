import {BiSolidDashboard } from 'react-icons/bi'


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



    export const menus = [
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

