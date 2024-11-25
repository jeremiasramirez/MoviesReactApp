import "./Siderbar.Component.css"
import "animate.css"

export default function SideBarComponent(){

    return <>
        
        <div className="container__sidebar">
            <h1 className="sidebar__title">MoFlix</h1>

            <h1 className="sidebar__container__title">Menu</h1>
            <div className="container__sidebar__items">
                

                {/* sidebar item */}
                <div className="container__sidebar__item animate__animated animate__fadeInLeft">
                    <img src="./public/home.png" alt="browse" />
                    <p>Browse</p>
                </div>


                {/* sidebar item */}
                <div className="container__sidebar__item animate__animated animate__fadeInLeft">
                    <img src="./public/favorite.png" alt="browse" />
                    <p>Watchlist </p>
                </div>

            </div>

               
          
           
        </div>
    </>
}

 