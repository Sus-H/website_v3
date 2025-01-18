import React from "react"

interface Props{
    date?: string
    title?: string
    description?: string
    description1?: string
    children?: React.ReactNode
}

export default function TimeLineTile({title, date, description, description1, children}: Props){
    return <li className="mx-10 ms-4">
                <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-black dark:border-black dark:bg-black"></div>
                <time className="mb-1 font-bold text-xs leading-none">{date}</time>
                <h3 className="font-semibold">{title}</h3>
                <p className="mb-4 mt-2 font-normal">{children}</p>
            </li>
}

<a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-black border border-black rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>