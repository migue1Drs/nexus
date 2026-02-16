"use client"
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from "next/navigation";
import clsx from 'clsx';
import {satoshi} from "@/app/ui/fonts";

const Nav_Item = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Products", href: "/products"},
]

export default function Navbar(){
    const pathname = usePathname();
    return(
        <nav className="relative flex items-center justify-between p-5 bg-cream shrink">
            <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Tecnology store" width={80} height={80}/>
                <h2 className={`text-3xl font-bold ${satoshi.className} text-blue`}>TecnoShop</h2>
            </div>
            <div className={"absolute left-[45%]"}>
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
        </nav>
    )
}
