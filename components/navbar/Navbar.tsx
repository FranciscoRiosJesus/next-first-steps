import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
    {
        text: "About",
        path: "/about"
    },
    {
        text: "Contact",
        path: "/contact"
    },
    {
        text: "Pricing",
        path: "/pricing"
    }
]

export default function Navbar () {
    return (
        <nav className="flex bg-blue-800 text-white bg-opacity-30 p-2 m-2 rounded">
            <Link className="flex items-center" href="/">
                <HomeIcon className="mr-2" size={16} />
                <span>Home</span>
            </Link>
            
            <div className="flex flex-1"></div>

            { navItems.map(item => (  
                <ActiveLink key={item.path} path={item.path} text={item.text}></ActiveLink>
            ))}
        </nav>
    )
}