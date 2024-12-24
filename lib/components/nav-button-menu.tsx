import { Link } from "@remix-run/react";

interface Props{
    to: string
    target?: string
    children?: React.ReactNode
}

export function NavButtonMenu({to,target, children}:Props){
    return <Link className="text no-underline hover:underline block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to={to} target={target}>{children}</Link>
}