// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AppBarComponent from "../../Components/AppBar/Appbar.Component";
import SideBarComponent from "../../Components/SideBar/Sidebar.Component";
import './HomePage.css'
// import SettingsPage from "../Settings/SettingsPage";
export default function HomePage(){

    return <>

        <section className="container__home">
            <article className="container__articles">
                 <SideBarComponent /> 
            </article>

            <article className="container__articles">
                 <AppBarComponent /> 

                 
             </article>
             <article className="container__children__routes">
                <Outlet />
             </article>

          
        </section>
    </>
}

