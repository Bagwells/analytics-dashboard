"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(true);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setMounted(true)
    },[]);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","light")
        }
    },[mounted])

    
    return (
        <>  
            <div className="flex flex-col w-[46px] h-24 p-2 bg-white dark:bg-slate-800 rounded-[100px] justify-between self-center">
                <button onClick={()=> setMounted(false)}
                    className="flex w-[30px]">
                    <img src="/Light-mode.svg" className="" alt=""/>
                </button>
                <button onClick={()=> setMounted(true)}
                    className="flex w-[30px]">
                    <img src="/dark-mode.svg" className="" alt=""/>
                </button>
            </div>
        </>
    )
};