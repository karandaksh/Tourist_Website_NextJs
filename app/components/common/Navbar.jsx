"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import logo from '@/public/assets/img/logo_orange.svg'




const menuItems = [
  { id: 1, name: "Home", href: "/", group: "left", active: true },
  { id: 2, name: "Tour", href: "/tour", group: "left" },
  { id: 3, name: "Destination", href: "/destination", group: "left" },
  { id: 4, name: "Activity", href: "/activity", group: "left" },
  { id: 5, name: "Pages", href: "/pages", group: "left" },
  { id: 6, name: "Contact", href: "/contact", group: "left" },
  { id: 7, name: "USD", href: "/currency", group: "right" },
  { id: 8, name: "Help", href: "/help", group: "right" },
];


const Navbar = () => {
  const pathname = usePathname()

  return (
    <>

      <div className="bg-background text-foreground transition-colors duration-300">

        {/* NAVBAR */}
        <nav className="w-full bg-background border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

            {/* Left Side: Logo & Links */}
            <div className="flex items-center gap-12">
              <div className="text-2xl font-black text-brandorange tracking-tight cursor-pointer">
                <Link href='/'> <img src={logo.src} alt="" /></Link>
              </div>

              <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">

                {/* {menuItems
                  .filter((item) => item.group === "left")
                  .map((item, index) => (
                    <a key={index} href={item.link} className={`transition-colors hover:text-brandorange ${item.active ? "text-brandorange font-semibold" : "text-textblue" }`}>
                      {item.name}
                    </a>
                  ))} */}






                {/* {menuItems
                  .filter((item) => item.group === "left")
                  .map((item, id) => (

                    
                    
                    <Link href={item.href} key={item.id} id={item.id} className={`link ${pathname === `/${item.name} ? 'active' : ''`} transition-colors hover:text-red ${item.active ? "text-red" : "text-textblue"}`}>{item.name}</Link>
                  )
                  )
                } */}


                {menuItems
                  .filter((item) => item.group === "left")
                  .map((item) => {
                    // 1. पहले ही चेक कर लो कि क्या यह लिंक अभी एक्टिव है या नहीं
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        href={item.href}
                        key={item.id} // सिर्फ 'key' ज़रूरी है, फालतू 'id' एट्रिब्यूट मत लगाओ
                        className={`transition-colors text-[15px] font-medium ${isActive
                          ? "text-brandorange font-semibold"
                          : "text-textblue hover:text-brandorange"
                          }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })
                }















              </div>
            </div>

            <div className="flex items-center gap-6 text-[15px] font-medium">
              <div className="hidden md:flex items-center gap-6 text-textblue">
                {/* {menuItems
                  .filter((item) => item.group === "right")
                  .map((item, index) => (
                    <a key={index} href={item.link} className="hover:text-brandorange">
                      {item.name}
                    </a>
                  ))} */}
              </div>




              {/* <button className="border border-textblue hover:bg-textblue hover:text-background text-textblue text-[15px] font-medium px-6 py-2.5 rounded-full transition-all">
                Log in
              </button> */}
            </div>

          </div>
        </nav>
      </div>


    </>
  )
}

export default Navbar
