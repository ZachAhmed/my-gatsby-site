import * as React from "react"

export default function Nav (props){
    return(
        <div className="bg-white dark:bg-neutral-900">
            <div className="flex place-content-end mx-10 font-sans">
                <p className="text-md p-4 hover:transition duration-150 hover:underline hover:rotate-6 ease-in dark:text-neutral-200">Work</p>
                <p className="text-md p-4 hover:transition duration-150 hover:underline hover:rotate-6 ease-in dark:text-neutral-200">About</p>
                <p className="text-md p-4 hover:transition duration-150 hover:underline hover:rotate-6 ease-in dark:text-neutral-200">Contact</p>
                <span className="p-4 hover:transition duration-150 hover:rotate-12 material-symbols-outlined dark:text-neutral-200">dark_mode</span>
                {/* <span className="p-4 hover:transition duration-150 hover:rotate-6 material-symbols-outlined material-symbols-outlined dark:text-neutral-200">light_mode</span> */}
            </div>
        </div>
    )
}

export function Head() {
  return (
    <head>
    <title>Hello World</title>
    </head>
  )
}