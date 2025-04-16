import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    extraClasses?: string;
    onClick?: () => void;
    showUnderline?: boolean;
}

const AnimatedLink = ({ href, children, onClick, showUnderline = true, extraClasses = "" }: AnimatedLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`relative group text-xl font-medium  ${extraClasses}`} onClick={onClick}>
            <span
                className={`${isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}
            >
                {children}
            </span>

            {showUnderline && (<span
                className={`absolute left-0 -bottom-1 h-[4px] bg-primary transition-all duration-200 ease-in-out 
                    ${isActive ? "w-full" : "w-[1px] group-hover:w-full"}`}
            ></span>)}
        </Link>
    );
};

export default AnimatedLink