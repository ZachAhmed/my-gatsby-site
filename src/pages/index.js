import * as React from "react"
import Nav from "../components/navbar"

const IndexPage = () => {
  return (
    <><Nav></Nav><>
    </>
      <div className="dark:bg-neutral-900 text-neutral-200">
        <p className="pl-10 font-sans font-extrabold text-5xl">Zach Ahmed</p>
      </div>
    </>
  )
}

export default IndexPage

export function Head() {
  return (
    <head>
    <title></title>
    </head>
  )
}
