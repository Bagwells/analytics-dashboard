'use client'
import { IoIosArrowDown } from "react-icons/io"
import ApexCharts, { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";


const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartStyle:React.FC =()=> {


    const chart = {
        title:'Sales Trends',
        period:'Weekly'
    };

    const [chartData, setChartData] = useState({
        series: [
          { name: '', data: [8.000, 18.000, 4.000, 28.000, 8.000, 45.000, 8.000, 20.000, 34.000, 4.000, 30.000, 24.000] },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                fontFamily: 'Plus_Jakarta_Sans',
                fontWeight: 600,
                fontSize: "12px"
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '30px',
                    endingShape: 'rounded',
                    borderRadius: 15,
                    borderRadiusApplication: 'end',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                style:{
                    colors:"#525252",
                    fontFamily: "Plus_Jakarta_sans"
                }
            },
            yaxis: {
                title: {
                    text: '',
                },
                show: true,
                min:0,
                max:50.000,
                labels:{
                    show: true,
                    align:'right',
                    minWidth: 0,
                    MaxWidth: 50.000,
                },
                style: {
                    fontFamily: "Plus Jakarta Sans",
                    colors: "#525252",
                    fontSize:"12px",        
                    fontWeight:600,    
                },
                states: {
                    normal: {
                        filter:{
                            type: 'none',
                            value: 0.1,
                        },
                    },
                    hover: {
                        filter:{
                            type: 'lighten',
                            value: 1,
                        }, 
                    },
                    active: {
                        allowMultipleDatapointsSelection: false,
                        filter: {
                            type: 'darken',
                            value: 1,
                        },
                    },
                },
            },
            labels: {
                formatter: function (value: any) {
                    return value 
                },
            },
            fill: {
                type: 'gradient',
                gradient:{
                    shade: 'dark',
                    type:"vertical",
                    shadeIntensity: 0.1,
                    color:'#34CAA5',
                    opacityFrom: 1,
                    opacityTo:0.5,
                },
                
            },
            
            tooltip: {
                enabled: true,
                x:{
                    show:false
                },
                fill:{
                    color:'#',
                },
                theme: 'dark',
                markers: {
                    show: false,
                    fillOpacity: 0.1,
                    colors: '#34CAA5',
                },
                y: {
                    formatter: function (val: any) {
                        return val;
                    },
                },
            },
        } as unknown as ApexOptions,
      });



    return(

        <div className="flex flex-col w-full h-[374px] bg-white dark:bg-grey800 border border-[#EDF2F7] dark:border-grey600  rounded-[14px] px-2.5 sm:px-5 py-2 sm:py-4 overflow-hidden">
            <div className="flex w-full items-center justify-between">
                <div className="font-jakarta font-semibold text-sm lg:text-lg text-textCol dark:text-grey200">
                    {chart?.title}
                </div>
                <div className="flex items-center gap-1 sm:gap-2.5">
                    <div className="font-jakarta font-medium text-[10px] sm:text-sm text-secondary dark:text-grey300">
                        Sort by:
                    </div>
                    <div className="flex items-center gap-2.5 w-fit h-8 px-3 py-1.5 border border-[#E1DFDF] rounded-[20px]">
                        <div className="font-jakarta font-normal text-secondary dark:text-grey300 text-xs">{chart?.period}</div>
                        <IoIosArrowDown className="text-xl text-[#0D062D] dark:text-grey300"/> 
                    </div>
                </div>
            </div>
            <div className=" w-full h-fit overflow-x-auto">
                    <ReactApexChart id="chart"
                        options={chartData.options}
                        series={chartData.series}
                        type="bar"
                        height='280px'
                        width={'700px'}
                    />
            </div>
        </div>
    )
}
export default ChartStyle

