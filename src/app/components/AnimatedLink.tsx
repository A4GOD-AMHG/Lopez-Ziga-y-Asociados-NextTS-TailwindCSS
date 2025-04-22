'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    extraClasses?: string;
    onClick?: () => void;
    showUnderline?: boolean;
    trailing?: boolean;
    noredirect?: boolean;
}

export default function AnimatedLink({ href, children, onClick, showUnderline = true, noredirect = false, extraClasses = "", trailing = false }: AnimatedLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || href != "/" && pathname.includes(href);

    return (
        <Link href={noredirect ? "/" : href} className={`relative group text-xl font-medium  ${extraClasses}`} onClick={onClick}>
            <span className={`${isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"} ${isActive && !showUnderline && "underline underline-offset-8 decoration-4 decoration-primary"}`}>{children}</span>
            {showUnderline && (<span
                className={`absolute left-0 -bottom-1 h-[4px] bg-primary transition-all duration-200 ease-in-out 
                    ${isActive ? "w-full" : "w-[0px] group-hover:w-full"}`}
            ></span>)}
            {trailing && <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                />
            </svg>}
        </Link>
    );
};