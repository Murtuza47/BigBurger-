import React from 'react'
import Aux from "../../hoc/Auxillary"

export default function Layout(props) {
    return (
        <Aux>
        <div>
            Toolbar, Backdrop, sideBar  
        </div>
        <main>
            {props.children}
        </main>
        </Aux>
    )
}
