import AppBarComponent from "../../Components/AppBar/Appbar.Component";
import SideBarComponent from "../../Components/SideBar/Sidebar.Component";
import './HomePage.css'
export default function HomePage(){

    return <>

        <section className="container__home">
            <article className="container__articles"> <SideBarComponent /> </article>
            <article> <AppBarComponent /> </article>
        </section>
    </>
}

