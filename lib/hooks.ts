import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView} = useInView({
        threshold: threshold,
    });
    const {setActiveSection, timeofLastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeofLastClick > 1000){
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeofLastClick, sectionName]);

    return {
        ref,
    };
}