import React from "react"

interface Props{
    title?: string
    timePeriod?: string
    description?: string
    children?: React.ReactNode
}

export function SubCard({title,timePeriod, description, children}: Props){
    return  <div className="mt-5">
                <div className="font-bold">{title}</div>
                <p>{timePeriod}</p>
                <p>{description}</p>
                <p>{children}</p>
            </div>
}