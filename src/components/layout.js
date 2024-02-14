import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({children}) => {
    return (
        <body>
            <Header></Header>
            <main >{children}</main>
            <Footer></Footer>
        </body>
    )
}

export default Layout