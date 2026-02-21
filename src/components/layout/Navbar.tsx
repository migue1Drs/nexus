"use client"
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from "next/navigation";
import clsx from 'clsx';
import {satoshi} from "@/app/ui/fonts";
import {useState} from "react";

const Nav_Item = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Products", href: "/products"},
]

export default function Navbar(){
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="flex p-5 bg-cream shrink">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden flex flex-col justify-center items-center"
            >
                <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className="relative w-full hidden sm:flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Tecnology store" width={80} height={80}/>
                    <h2 className={`text-3xl font-bold ${satoshi.className} text-blue`}>TecnoShop</h2>
                </div>
                <div className={"absolute    left-[45%]"}>
                    <ul className="flex gap-4">
                        {Nav_Item.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        `${satoshi.className} text-blue text-lg hover:text-orange`,
                                        {'text-orange font-bold': pathname === item.href}
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen &&(
                <div className={`w-full h-screen flex items-center justify-center`}>
                    <ul className={`${satoshi.className} flex  flex-col w-full  h-screen items-center  justify-center gap-1`}>
                        {Nav_Item.map((item) => (
                            <li key={item.name} className={`w-full flex items-center justify-center h-1/3`}>
                                <Link href={item.href} className={clsx(
                                    `${satoshi.className} text-blue text-lg hover:text-orange`,{
                                        'text-orange font-bold': pathname === item.href,
                                    }
                                )}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            )}

        </nav>
    )
}
