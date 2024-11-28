// import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE";
import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE";
import "./CardMovie.Component.css"

export default function CardMovie({title}:MOVIE_INTERFACE){
   
        
    // const {title} = props;
    return <article  className="card">
        <p>{title}</p>
        {/* <img className="card__image" src="https://image.tmdb.org/t/p/w200/nhcSZTzQ4euUYvuiFVvyINnhAV4.jpg" alt="poster" /> */}
        {/* <p className="card__title">{title}</p> */}
    </article> 
}