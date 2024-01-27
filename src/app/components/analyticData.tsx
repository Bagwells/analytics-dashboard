import { HiOutlineDocumentArrowDown } from "react-icons/hi2"


const AnalyticDataCard = (props:any) => {

    return (

        <div className="flex flex-col justify-between w-full h-[180px] px-3 py-3 sm:px-4 sm:py-4 bg-white dark:bg-grey800 border border-[#EDF2F7] dark:border-grey700 rounded-[14px]">
            <div className="w-full flex items-center justify-between">
                <div className="flex w-10 h-10 items-center justify-center border border-[#E6E6E6] rounded-full">
                    <img src={`${props?.icons}`} alt="" className="w-6 h-6"/>
                </div>
                <div className="flex">
                    <img src={`${props?.chart}`} alt="" className=""/>
                </div>
            </div>
            <div className="flex flex-col w-full gap-2.5">
                <div className="font-jakarta font-medium text-base sm:text-lg text-[#898989] dark:text-grey200 ">
                    {props?.title}
                </div>
                <div className="font-jakarta font-medium text-lg sm:text-2xl text-secondary dark:text-grey300 ">
                    {props?.metric}
                </div>
            </div>
            <div className="flex w-full items-center justify-between gap-2">
                <div className={`flex w-17.5 items-center px-4 py-1 rounded-[100px] ${props?.backColor} gap-1`}>
                    <img className="w-[9px]" src={`${props?.arrow}`}/>
                    <div className={`font-jakarta font-medium text-xs ${props?.textColor}`}>
                        {props?.rating}
                    </div>
                </div>
                <div className="font-Inter font-normal text-sm text-[#606060] text-right">
                    vs.previous month
                </div>
            </div>
        </div>
    )
}

const TableDataAnalysis = ()=> {
    return (
        <>
            <table className="flex table-fixed flex-col w-[766px] md:w-full">
                <thead>
                    <tr className="flex w-full items-start gap-5">
                        <th className="w-[200px] font-jakarta font-medium text-xl md:text-2xl text-left text-[#9CA4AB]">Name</th>
                        <th className="w-[116px] font-jakarta font-medium text-xl md:text-2xl text-left text-[#9CA4AB]">Date</th>
                        <th className="w-[120px] font-jakarta font-medium text-xl md:text-2xl text-left text-[#9CA4AB]">Amount</th>
                        <th className="w-[95px] font-jakarta font-medium text-xl md:text-2xl  text-left text-[#9CA4AB]">Status</th>
                        <th className="w-[80px] font-jakarta font-medium text-xl md:text-2xl text-left text-[#9CA4AB]">Invoice</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-4">
                    <tr className="flex pt-3 w-full items-center border-t border-[#EDF2F6] gap-5 ">
                        <td className="inline-flex items-center w-[200px] gap-2.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                <img src="/Marcus.svg" alt="" className="w-full"/>
                            </div>
                            <div className="font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                                Marcus Bergson
                            </div>
                        </td>
                        <td className="w-[116px] font-jakarta font-normal text-grey500 text-sm md:text-base">
                            Nov 15, 2023
                        </td>
                        <td className="w-[120px] font-jakarta font-medium text-[#0D062D] dark:text-grey400 text-sm md:text-base">
                            $80,000
                        </td>
                        <td className="w-[95px] font-jakarta font-normal text-[#34CAA5] text-sm md:text-base">
                            Paid
                        </td>
                        <td className="inline-flex items-center w-[80px] gap-1.5">
                            <HiOutlineDocumentArrowDown className="text-sm text-[0D062D] dark:text-grey400"/>
                            <div className="font-jakarta font-normal text-[#0D062D] dark:text-grey400 text-sm">View</div>
                        </td>
                    </tr>
                    <tr className="flex pt-3 w-full items-center border-t border-[#EDF2F6] gap-5 ">
                        <td className="inline-flex items-center w-[200px] gap-2.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                <img src="/Jaydon.svg" alt="" className="w-full"/>
                            </div>
                            <div className="font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                                Jaydon Vaccaro
                            </div>
                        </td>
                        <td className="w-[116px] font-jakarta font-normal text-grey500 text-sm md:text-base">
                            Nov 15, 2023
                        </td>
                        <td className="w-[120px] font-jakarta font-medium text-[#0D062D] dark:text-grey400 text-sm md:text-base">
                            $150,000
                        </td>
                        <td className="w-[95px] font-jakarta font-normal text-[#ED544E] text-base">
                            Refund
                        </td>
                        <td className="inline-flex items-center w-[80px] gap-1.5">
                            <HiOutlineDocumentArrowDown className="text-sm text-[0D062D] dark:text-grey400"/>
                            <div className="font-jakarta font-normal text-[#0D062D] dark:text-grey400 text-sm">View</div>
                        </td>
                    </tr>
                    <tr className="flex pt-3 w-full items-center border-t border-[#EDF2F6] gap-5 ">
                        <td className="inline-flex items-center w-[200px] gap-2.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                <img src="/Corey.svg" alt="" className="w-full"/>
                            </div>
                            <div className="font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                                Corey Schleifer
                            </div>
                        </td>
                        <td className="w-[116px] font-jakarta font-normal text-grey500 text-sm md:text-base">
                            Nov 15, 2023
                        </td>
                        <td className="w-[120px] font-jakarta font-medium text-[#0D062D] dark:text-grey400 text-sm md:text-base">
                            $87,000
                        </td>
                        <td className="w-[95px] font-jakarta font-normal text-[#34CAA5] text-sm md:text-base">
                            Paid
                        </td>
                        <td className="inline-flex items-center w-[80px] gap-1.5">
                            <HiOutlineDocumentArrowDown className="text-sm text-[0D062D] dark:text-grey400"/>
                            <div className="font-jakarta font-normal text-[#0D062D] dark:text-grey400 text-sm">View</div>
                        </td>
                    </tr>                    
                    <tr className="flex pt-3 w-full items-center border-t border-[#EDF2F6] gap-5 ">
                        <td className="inline-flex items-center w-[200px] gap-2.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                <img src="/Marcus.svg" alt="" className="w-full"/>
                            </div>
                            <div className="font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                                Cooper Press
                            </div>
                        </td>
                        <td className="w-[116px] font-jakarta font-normal text-grey500 text-sm md:text-base">
                            Nov 15, 2023
                        </td>
                        <td className="w-[120px] font-jakarta font-medium text-[#0D062D] dark:text-grey400 text-sm md:text-base">
                            $100,000
                        </td>
                        <td className="w-[95px] font-jakarta font-normal text-[#ED544E] text-base">
                            Refund
                        </td>
                        <td className="inline-flex items-center w-[80px] gap-1.5">
                            <HiOutlineDocumentArrowDown className="text-sm text-[0D062D] dark:text-grey400"/>
                            <div className="font-jakarta font-normal text-[#0D062D] dark:text-grey400 text-sm">View</div>
                        </td>
                    </tr>
                    <tr className="flex pt-3 w-full items-center border-t border-[#EDF2F6] gap-5 ">
                        <td className="inline-flex items-center w-[200px] gap-2.5">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full">
                                <img src="/Phillip.svg" alt="" className="w-full"/>
                            </div>
                            <div className="font-jakarta font-medium text-secondary dark:text-grey300 text-sm md:text-base">
                                Phillip Lubin
                            </div>
                        </td>
                        <td className="w-[116px] font-jakarta font-normal text-grey500 text-sm md:text-base">
                            Nov 13, 2023
                        </td>
                        <td className="w-[120px] font-jakarta font-medium text-[#0D062D] dark:text-grey400 text-sm md:text-base">
                            $78,000
                        </td>
                        <td className="w-[95px] font-jakarta font-normal text-[#34CAA5] text-sm md:text-base">
                            Paid
                        </td>
                        <td className="inline-flex items-center w-[80px] gap-1.5 cursor-pointer">
                            <HiOutlineDocumentArrowDown className="text-sm text-[0D062D] dark:text-grey400"/>
                            <div className="font-jakarta font-normal text-[#0D062D] dark:text-grey400 text-sm">View</div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
} 

const AnalyticBarCard = (props:any)=> {
    return(
        <div className="flex flex-col w-full gap-4">
            <div className="inline-flex items-center font-jakarta font-semibold text-lg text-[#22242C] dark:text-grey200">
                {props?.title}
            </div>
            <div className="flex w-full h-3 bg-grey100 dark:bg-grey400 rounded-[40px]">
                <div className={`flex ${props?.width} h-3 ${props?.color} rounded-[40px]`}/>
            </div>
            <div className="inline-flex justify-between items-center">
                <div className="font-jakarta font-normal text-lg text-[#525252] dark:text-grey300">
                    ${props?.amount}
                </div>
                <div className="font-jakarta font-normal text-lg text-[#525252] dark:text-grey300">
                    {props?.percentage}
                </div>
            </div>
        </div>
    )
}

export {AnalyticDataCard, TableDataAnalysis, AnalyticBarCard};