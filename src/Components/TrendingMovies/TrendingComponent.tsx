import { useEffect, useState } from "react";
import TrendingMovieService from "../../Services/TrendingService";
import "./TrendingComponent.css"
import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE";
import SkeletonComponent from "../Skeleton/Skeleton.Component";
import { useNavigate } from "react-router-dom";
// import PopularService from "../../Services/PopularService";
export default function TrendingComponent(){
    const [trendingMovies,setTrendingMovies] = useState([])
    
    useEffect(()=>{

     



        const obsTrendingMovie = ()=>{
             TrendingMovieService().subscribe((response)=>{
                // console.log(response);
                setTrendingMovies(response)
            })
        }

        return ()=>{
            obsTrendingMovie()
           setTrendingMovies([])
        }

    },[])
    




    const navigate  = useNavigate()
    const goToShow=(id:number)=>{

        navigate ("show/"+id)

    }
    return (
     
        
        <div>
            <p className="title__trending">Trending Now</p>
        
        <section className="CardMovie">
           
          
          
            {
              trendingMovies.length?  trendingMovies.map((movies:MOVIE_INTERFACE,index:number)=>{
                   
                    return( 
                        <article onClick={()=>goToShow(movies.id)} key={index}  className="card animated__animate animate__bounceIn">
                       
                        <img className="card__image" src={"https://image.tmdb.org/t/p/w300/"+movies.poster_path+".jpg"} alt="poster" />
                        
                        <div className="container__title__card">
                        {movies.title? <p className="card__title">{movies.title.substring(0,20)}</p>:
                        <p className="card__title">{movies.name?.substring(0,20)}</p>}
                        </div>
                        
                    </article> 
                )
                }): <SkeletonComponent />
                
                
            }
           
        </section>

        </div>
    )
}

