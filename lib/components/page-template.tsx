interface Props{
    classNames?: string
    children?: React.ReactNode
}

export function Page({children, classNames="h-screen"}: Props){
    return(
        <div className={classNames}>{children}</div>
    )
}