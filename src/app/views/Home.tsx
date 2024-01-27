'use client'
import { LuCalendarDays } from "react-icons/lu"
import SideBar from "../components/SideNavBar"
import NavBar from "../components/TopNavBar"
import { AnalyticBarCard, AnalyticDataCard, TableDataAnalysis } from "../components/analyticData"
import ChartStyle from "../components/chart"
import { useState } from "react"

const HomePage =() => {

    const [slideMenu, setSlideMenu] = useState(false);

    const switchSlide = slideMenu? "-translate-x-0":"-translate-x-20" 
    
    const slideToggle =()=>{
        setSlideMenu(prevState => !prevState)
    };

    const slideToggleOff =()=> {

        setSlideMenu(false);
    }


    return(
        <>
        <div className="w-full 2xl:px-80 bg-grey50 dark:bg-grey900">
            <div className="flex w-full h-full bg-grey50 dark:bg-grey900 ">
                    <SideBar 
                        close={slideToggle} 
                        slide={switchSlide}
                    />
                <div className="flex flex-col w-full h-full ">
                    <div className=" flex w-full">
                        <NavBar open={slideToggle}/>
                    </div>
                    <div onClick={slideToggleOff} 
                        className="flex w-full h-full mt-17.5 lg:pl-20">
                        <div className="flex flex-col w-full bg-[#FAFAFA] dark:bg-grey800 px-2.5 sm:px-5 py-5 gap-5">
                            <div className="flex lg:hidden items-center self-end gap-2.5 px-4 py-3">
                                <LuCalendarDays className="text-black dark:text-white text-xl" />
                                <div className="font-Inter font-medium text-sm text-textCol dark:text-grey200">
                                    15 November, 2023
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5">
                                <div className="flex w-full lg:flex-[0.5]">
                                    <ChartStyle/>
                                </div>
                                <div className="flex flex-[0.5]">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 w-full lg:w-full">
                                        <AnalyticDataCard
                                            icons="/box-tick.svg"
                                            chart="/GreenChart.svg"
                                            title="Total Order"
                                            metric="350"
                                            backColor="bg-analyticbggreen"
                                            textColor="text-[#34CAA5]"
                                            arrow="/trending-up.svg"
                                            rating="23,5%"
                                        />
                                        <AnalyticDataCard
                                            icons="/3d-rotate.svg"
                                            chart="/RedChart.svg"
                                            title="Total Refund"
                                            metric="270"
                                            backColor="bg-analyticbgred"
                                            textColor="text-[#ED544E]"
                                            arrow="/trending-down.svg"
                                            rating="23,5%"
                                        />
                                        <AnalyticDataCard
                                            icons="/shopping-cart.svg"
                                            chart="/RedChart.svg"
                                            title="Average Sales"
                                            metric="1567"
                                            backColor="bg-analyticbgred"
                                            textColor="text-[#ED544E]"
                                            arrow="/trending-down.svg"
                                            rating="23,5%"
                                        />
                                        <AnalyticDataCard
                                            icons="/coin.svg"
                                            chart="/GreenChart.svg"
                                            title="Total Income"
                                            metric="$350.000"
                                            backColor="bg-analyticbggreen"
                                            textColor="text-[#34CAA5]"
                                            arrow="/trending-up.svg"
                                            rating="23,5%"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full lg:flex-row gap-5 justify-between">
                                <div className="flex flex-col w-full h-fit lg:flex-[0.65] px-2.5 py-2 sm:px-5 sm:py-4.5 bg-white dark:bg-grey800 dark:border-grey700 border border-[#EDF2F7] rounded-[14px] gap-5 overflow-hidden">
                                    <div className="flex justify-between items-center w-full">
                                        <div className=" font-jakarta font-semibold text-textCol dark:text-grey200 text-sm sm:text-lg">
                                            Last Orders
                                        </div>
                                        <div className="font-jakarta font-medium text-[#34CAA5] opacity-100 text-sm sm:text-lg">
                                            See All
                                        </div>
                                    </div>
                                    <div className="w-full flex overflow-auto">
                                        <TableDataAnalysis/>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full lg:h-[419px] lg:flex-[0.4] px-2.5 py-2 sm:px-5 sm:py-4 bg-white dark:bg-grey800 dark:border-grey700 border border-[#EDF2F7] rounded-[8px] gap-5 overflow-hidden">
                                    <div className="flex justify-between items-center w-full">
                                        <div className=" font-jakarta font-semibold text-textCol dark:text-grey200 text-sm sm:text-lg">
                                            Top Platform
                                        </div>
                                        <div className="font-jakarta font-medium text-[#34CAA5] opacity-100 text-lg">
                                            See All
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full  overflow-auto">
                                        <AnalyticBarCard
                                            title="Book Bazaar"
                                            width="w-[50%]"
                                            color="bg-purple"
                                            amount="2,500,00"
                                            percentage="+15%"
                                        />
                                        <AnalyticBarCard
                                            title="Artisan Aisle"
                                            width="w-[40%]"
                                            color="bg-blue"
                                            amount="1,800,00"
                                            percentage="+10%"
                                        />
                                        <AnalyticBarCard
                                            title="Toy Troop"
                                            width="w-[25%]"
                                            color="bg-orange"
                                            amount="1,200,00"
                                            percentage="+8%"
                                        />
                                        <AnalyticBarCard
                                            title="XStore"
                                            width="w-[20%]"
                                            color="bg-red"
                                            amount="2,500,00"
                                            percentage="+15%"
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 

export default HomePage