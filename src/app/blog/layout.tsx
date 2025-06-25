"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { setTheme } = useTheme();

    useEffect(() => {
        const prevTheme = localStorage.getItem("theme");
        
        setTheme("dark");
        
        return () => {
            if (prevTheme) {
                setTheme(prevTheme);
            }
        };
    }, [setTheme]);
    
    return <div className="dark bg-black">{children}</div>;
}