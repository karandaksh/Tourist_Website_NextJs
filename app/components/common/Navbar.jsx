"use client";

import React, { Children } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import logo from '@/public/assets/img/logo_white.svg'
import Button from '../ui/Button';





const menuItems = [
  // { id: 1, name: "Home", href: "/", group: "left", isActive: true },
  { id: 1, name: "Home", href: "/", group: "left" },
  { id: 2, name: "Tour", href: "/tour", group: "left" },
  { id: 3, name: "Destination", href: "/destination", group: "left" },
  { id: 4, name: "Activity", href: "/activity", group: "left" },
  { id: 5, name: "Pages", href: "/pages", group: "left" },
  { id: 6, name: "Contact", href: "/contact", group: "left" },
  { id: 7, name: "USD", href: "/usd", group: "right" },
  { id: 8, name: "Help", href: "/help", group: "right" },
  { id: 9, name: "Sign up", href: "/signup", group: "right" },
];


const Navbar = () => {
  const pathname = usePathname()
  const OnClickHandle = () => {
    console.log('login Click');

  }



  return (
    <>
      <div className="transition-all duration-300 bg-transparent text-foreground shadow ">

        <nav className="max-w-[1320px] mx-auto py-4">
          <div className="mx-auto px-3.5">
            <div className="grid grid-cols-12 items-center justify-between ms-8">
              <div className="cursor-pointer col-span-2 -mt-1">
                <Link href='/'> <img src={logo.src} alt="logo" /></Link>
              </div>
              <div className="leftMenu col-span-6">
                {menuItems
                  .filter((item) => (item.group === 'left'))
                  .map((item) => {
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) || pathname.includes(item.href);
                    return (
                      <Link key={item.id} href={item.href} className={`text-sm px-2 py-4 mx-2 ${isActive ? 'text-red-500' : ''} hover:text-red-500 transition-all duration-300`}>{item.name}</Link>
                    )
                  })
                }
              </div>

              <div className="rightMenu col-span-4 text-right">
                {menuItems
                  .filter((item) => (item.group === 'right'))
                  .map((item) => {

                    const isActive = item.pathname === "/" ? pathname === "/" : pathname === pathname.startsWith(item.href) || pathname.includes(item.href)

                    return (
                      <Link key={item.id} href={item.href} className={`text-sm px-2 py-4 mx-2 ${isActive ? 'text-red-500' : ''} hover:text-red-500 transition-all duration-300`}>{item.name}</Link>
                    )
                  }

                  )
                }


                {/*<Button  btnType='button' btnClass='px-4 py-2 rounded-full border text-sm cursor-pointer' onClick={OnClickHandle}>Register</Button>*/}  {/* This is a for example this is not part of Menu */}
                {/* <Button  btnType='button' btnClass='px-4 py-2 rounded-full border text-sm cursor-pointer' onMouseOver={OnClickHandle}>Login</Button> */}


                <Link href='/login' className='px-4 py-2 rounded-full border text-sm cursor-pointer'>Login</Link>

              </div>



            </div>
          </div>
        </nav>
      </div>


    </>
  )
}

export default Navbar
