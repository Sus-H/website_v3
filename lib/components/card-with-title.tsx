interface Props{
    cardTitle: string
    children?: React.ReactNode
}

export function Card({children, cardTitle}:Props){
    return  <div className="mb-3 divide-y-1">
                <h1 className="px-2 bg-pink-800 sticky z-0 text-white text-center rounded-sm">{cardTitle}</h1>
                {children}
            </div>
}