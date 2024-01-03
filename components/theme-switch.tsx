"use client";

import { useTheme } from '@/context/theme-context';
import React, { useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const { theme,toggleTheme } = useTheme();
    return (
        <button className='fixed z-20 bottom-5 right-5 bg-gray-300 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-500 border-opacity-40 shadow-2xl rounded-full 
        flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all'
        onClick={toggleTheme}
        >
            {
                theme === 'light' ? <BsSun /> : <BsMoon />
            }
            
        </button>
    )
}