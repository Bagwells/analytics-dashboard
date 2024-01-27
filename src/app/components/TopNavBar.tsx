
import { IoIosArrowDown } from "react-icons/io"
import { LuCalendarDays } from "react-icons/lu"
import { PiBell } from "react-icons/pi"
import { RiSearchLine } from "react-icons/ri"


const NavBar =({open}:{open:(args?:any)=>void})=> {

    const profile = {
        Name: 'Justin Bergson',
        email: 'Justin@gmail.com',
    }

    return (
        <>
            <nav className="fixed flex inset-0 w-full h-17.5 bg-grey50 dark:bg-grey800 items-center py-4.5 px-2 border-b border-[#EBECF2] dark:border-grey600 z-30">
                <div className="lg:w-20"/>
                <div className="flex w-full h-full items-center justify-between z-50 gap-4">
                    <div className="flex items-center">
                        <img onClick={open}
                            src="/Logo.svg" className={`lg:hidden animate-pulse w-10 h-5`} alt=""/>
                        <div className="font-jakarta font-semibold text-sm lg:text-xl text-[#26282C] dark:text-grey200">
                            Dashboard
                        </div>
                    </div>
                    <div/>
                    <div className="flex w-fit h-full items-center gap-5 justify-between">
                        <div className="max-w-[349px] h-12 hidden sm:flex px-4 items-center bg-white dark:bg-grey800 border border-borderCol dark:border-grey400 rounded-3xl gap-2 overflow-hidden">
                            <RiSearchLine className="text-lg text-ph-grey dark:text-grey400"/>
                            <input className="w-full bg-transparent placeholder:font-Inter placeholder:font-normal placeholder:text-base placeholder:text-[#A3A3A3]" 
                                placeholder="Search..."
                            />
                        </div>
                        <div className="hidden lg:flex items-center gap-2.5 px-4 py-3">
                            <LuCalendarDays className="text-black dark:text-white text-xl" />
                            <div className="font-Inter font-medium text-sm text-textCol dark:text-grey200">
                                15 November, 2023
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-10 h-10 border-[0.769px] border-borderCol rounded-full">
                            <PiBell className="text-xl text-[#0D062D] dark:text-grey300"/>
                        </div>
                        <div className="flex relative w-fit h-12 py-1.5 px-2 dark:bg border-borderCol border rounded-[28px] items-center justify-around gap-3">
                            <div className="flex w-9 rounded-full">
                                <img src="/Profile.svg" alt="" className="w-full h-full" />
                            </div>
                            <div className="hidden md:flex flex-col w-fit justify-between items-end">
                                <div className="font-Inter font-normal text-right text-sm text-textCol dark:text-grey50">{profile?.Name}</div>
                                <div className="font-Inter font-normal text-right text-sm text-[#787486] dark:text-grey300">{profile?.email}</div>
                            </div>
                            <div className="">
                                <IoIosArrowDown className="text-lg text-[#0D062D] dark:text-grey400"/> 
                            </div>
                            <div className="absolute"></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar