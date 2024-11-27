 
// import { NavLink } from "react-router-dom"
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Siderbar.Component.css"
import "animate.css"
// import HomePage from "../../Pages/Home/HomePage"
// import HomePage from "../../Pages/Home/HomePage"
// import SettingsPage from "../../Pages/Settings/SettingsPage"

export default function SideBarComponent(){

  
    return <>
       
        <div className="container__sidebar">
            <h1 className="sidebar__title animate__animated animate__fadeIn">Flix</h1>

            <h1 className="sidebar__container__title animate__animated animate__fadeIn">Menu</h1>
           
        
           
          
 
           
            <div className="container__sidebar__items">
           
         

                
                {/* sidebar item Browse*/}
                <Link  to="/" className="resetlinkrouter">
                    <div className="container__sidebar__item animate__animated animate__fadeIn">
                        <img src="/home.png" alt="browse" />
                        <p>Browse</p>
                    </div>
                </Link>

                {/* sidebar item Watchlist*/}
                <Link  to="watchlist" className="resetlinkrouter">
                    <div className="container__sidebar__item animate__animated animate__fadeIn">
                        <img src="/favorite.png" alt="browse" />
                        <p>Watchlist </p>
                    </div> 
                </Link>

                <Link  to="setting" className="resetlinkrouter">
                   {/* sidebar item SettingsPage*/}
                   <div  className="container__sidebar__item animate__animated animate__fadeIn">
                    <img src="/settings.png" alt="Settings" />
                    <p>Settings </p>
                    </div> 
                </Link>
               
            </div>
             
        </div>
        
    </>
}

 