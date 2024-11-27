import { Outlet } from "react-router-dom";
import AppBarComponent from "../../Components/AppBar/Appbar.Component";
import SideBarComponent from "../../Components/SideBar/Sidebar.Component";
import './HomePage.css'
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";


export default function HomePage(){
    DocumentTitle()

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

