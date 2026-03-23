import { Outlet } from "react-router-dom"
import { Footer } from "../ui/Footer"
import { Header } from "../ui/Header"

export const Applayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}