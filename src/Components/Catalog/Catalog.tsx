
// import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE"

import CarrouselTop from "../CarrouselTop/Carrouseltop.Component";
import PopularMoviesComponent from "../PopularMovies/PopularMovies.Component";
import TrendingComponent from "../TrendingMovies/TrendingComponent";



export default function Catalog(){
   


    return <>
        <CarrouselTop />
        <TrendingComponent />
        <PopularMoviesComponent />
    </>
}