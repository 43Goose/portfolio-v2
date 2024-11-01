'use client';
import { useEffect, useState } from 'react'

export default function useIsMobile() {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const resize = () => {
            setScreenSize(window.innerWidth);
        }

        resize();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])


    return screenSize <= 870;
}
