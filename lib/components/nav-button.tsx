import { Link } from "@remix-run/react";
import React from "react";

interface Props{
    to: string
    target?: string
    children?: React.ReactNode
}

export function NavButton({to,target, children}:Props){
    return <Link className="no-underline hover:underline" to={to} target={target}>{children}</Link>
}