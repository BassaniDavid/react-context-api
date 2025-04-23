// importo il componente "Navbar"
import Navbar from "../components/Navbar";

// importo da react-router outlet
import { Outlet, NavLink } from "react-router-dom";


export default function DefaultLayout() {
    return (
        <>
            <Navbar />

            {/* elemento che verrà sostituito da ciò che è presente nelle varie pagine */}
            <Outlet />
        </>


    )
}