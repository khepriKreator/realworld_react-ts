import {Header, Footer} from "../";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header auth={true}/>
            <Outlet/>
            <Footer/>
        </>
    )
}