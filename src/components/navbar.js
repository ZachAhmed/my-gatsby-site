import * as React from "react"

export default function Header (props){
    return(
        <div className="navBar">
            <Link to="/">{props.staticName}</Link>

        </div>
    )
}