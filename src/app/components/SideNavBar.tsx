import { useState } from "react"
import { ThemeSwitcher } from "../ThemeSwitcher"

interface menu {
    close:any;
    slide:any;

}

const SideBar:React.FC<menu> = ({close, slide}) => {


    return(
        <div className={`fixed w-14 sm:w-20 h-full flex flex-col py-5 bg-[#F7F8FA] dark:bg-grey800 items-center ${slide} lg:-translate-x-0 
            transition-all duration-500 justify between gap-2 border-r border-[#EBECF2] dark:border-grey700 z-50`}
        >
            <div className="flex w-full items-center flex-col gap-5">
                <img onClick={close} 
                    src="/Logo.svg" className="animate-pulse w-8 sm:w-10 cursor-pointer" alt=""/>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex h-5 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/gridmenu.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </div>
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/trend-up.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/profile-2user.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/box.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/discount-shape.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/info-circle.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <ThemeSwitcher/>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-full flex flex-col ">
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/arrow-right.svg" className=" w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <button className="flex h-10 py-5 w-full items-center justify-center">
                        <div className=" h-fit w-full items-center justify-center flex dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                            <img src="/setting-2.svg" className="w-10 h-5" alt=""/>
                        </div>
                    </button>
                    <button className="flex h-10 py-5 w-full items-center justify-center dark:hover:border-[#F7F8FA] hover:border-r-[3px] hover:border-[#0D062D]">
                        <img src="/logout.svg" className=" w-10 h-5" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar