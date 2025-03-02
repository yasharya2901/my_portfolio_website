"use client";
import { createContext, RefObject, useContext, useRef } from "react";

interface ScrollContextType {
    aboutRef: RefObject<HTMLDivElement | null>;
    experienceRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
    scrollToSection: (section: 'about' | 'experience' | 'projects' | 'contact') => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({children}: {children: React.ReactNode}) => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (section: 'about' | 'experience' | 'projects' | 'contact') => {
        const refs = {
            about: aboutRef,
            experience: experienceRef,
            projects: projectsRef,
            contact: contactRef
        };

        const ref = refs[section];

        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <ScrollContext.Provider value={{aboutRef, experienceRef, projectsRef, contactRef, scrollToSection}}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => {
    const context = useContext(ScrollContext);

    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }

    return context;
}