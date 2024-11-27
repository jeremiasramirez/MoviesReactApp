 
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

            
            
           
            <div className="container__sidebar__items animate__animated animate__fadeIn">
           

                <h1 className="sidebar__container__title ">Menu</h1>

                {/* sidebar item Browse*/}
                <Link  to="/" className="resetlinkrouter">
                    <div className="container__sidebar__item ">
                        <img src="/home.png" alt="browse" />
                        <p>Browse</p>
                    </div>
                </Link>

                {/* sidebar item Watchlist*/}
                <Link  to="watchlist" className="resetlinkrouter">
                    <div className="container__sidebar__item ">
                        <img src="/favorite.png" alt="browse" />
                        <p>Watchlist </p>
                    </div> 
                </Link>


                {/* sidebar item coming soon*/}
                <Link  to="coming" className="resetlinkrouter">
                    <div className="container__sidebar__item ">
                        <img src="/comin.png" alt="browse" />
                        <p>Coming soon </p>
                    </div> 
                </Link>


                {/* sidebar item TV*/}
                <Link  to="tv" className="resetlinkrouter">
                    <div className="container__sidebar__item ">
                        <img src="/tv.png" alt="browse" />
                        <p>TV shows </p>
                    </div> 
                </Link>


                <h1 className="sidebar__container__title ">General</h1>
           

                {/* sidebar item Setting*/}
                <Link  to="setting" className="resetlinkrouter">
                   {/* sidebar item SettingsPage*/}
                   <div  className="container__sidebar__item ">
                    <img src="/settings.png" alt="Settings" />
                    <p>Settings </p>
                    </div> 
                </Link>
               
            </div>
             
        </div>
        
    </>
}

 