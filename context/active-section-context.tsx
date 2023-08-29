"use client";
import type { SectionName } from '@/lib/types';
import React, { useContext } from 'react'
import { createContext, useState } from 'react';



type ActiveSectionContextProviderProps = {children:React.ReactNode};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeofLastClick: number;
    setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeofLastClick, setTimeofLastClick] = useState(0);

    return (<ActiveSectionContext.Provider 
            value={{
                activeSection,
                setActiveSection,
                timeofLastClick,
                setTimeofLastClick
            }}>
        {children}
    </ActiveSectionContext.Provider>);
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    if(context === null){
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}