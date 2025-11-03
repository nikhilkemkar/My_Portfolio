// "use client"
import Link from "next/link"
import { Button } from "./ui/button"
// import { useEffect, useState } from "react"



const Navbar = () => {
    // const [showBackground,setShowBackground]=useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 100) {
    //             setShowBackground(true)
    //         } else {
    //             setShowBackground(false)
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }

    // }, [])
    return (
        // <nav className={`flex-between px-8  w-full py-4 z-50 ${showBackground && 'bg-[rgba(61,57,96,0.8)]'}  `}>
        <nav className={`flex-between px-8 absolute  w-full py-4 z-50`}>

            <Link href="/" className="flex items-center gap-4">
                <div className=" bg-gray-800 text-white  rounded-full font-bold text-3xl py-1.5 px-3 ">
                    N
                </div>
                <p className=" text-lg hidden md:block">Nikhil Kemkar</p>
            </Link>

            <div>
                {/* Resume section removed */}
            </div>
        </nav>
    )
}

export default Navbar
