'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    extraClasses?: string;
    onClick?: () => void;
    showUnderline?: boolean;
}

export default function AnimatedLink({ href, children, onClick, showUnderline = true, extraClasses = "" }: AnimatedLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`relative group text-xl font-medium  ${extraClasses}`} onClick={onClick}>
            <span className={`${isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"} ${isActive && !showUnderline && "underline underline-offset-8 decoration-4 decoration-primary"}`}>{children}</span>
            {showUnderline && (<span
                className={`absolute left-0 -bottom-1 h-[4px] bg-primary transition-all duration-200 ease-in-out 
                    ${isActive ? "w-full" : "w-[0px] group-hover:w-full"}`}
            ></span>)}
        </Link>
    );
};