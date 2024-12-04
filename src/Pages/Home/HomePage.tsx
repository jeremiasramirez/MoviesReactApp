import { Outlet } from "react-router-dom";
import AppBarComponent from "../../Components/AppBar/Appbar.Component";
import SideBarComponent from "../../Components/SideBar/Sidebar.Component";
import './HomePage.css'
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";
// import Catalog from "../../Components/Catalog/Catalog";


export default function HomePage(){
   
    const changeTitle = ()=>{
        DocumentTitle()
        
    }
   
        changeTitle()
    
    // const useParam=useParams();

    return <>

        <section className="container__home">
            <article className="container__articles">
                 <SideBarComponent /> 
            </article>

            <article className="container__articles">
                 <AppBarComponent /> 
             </article>

           <article className="container__children__routes">
            {<Outlet />}
          
           </article>
        </section>
    </>
}

