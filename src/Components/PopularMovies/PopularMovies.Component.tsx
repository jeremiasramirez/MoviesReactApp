
// import "../TrendingMovies/TrendingComponent.css"

import { useEffect, useState } from "react";
import SkeletonComponent from "../Skeleton/Skeleton.Component";
import { useNavigate } from "react-router-dom";
import PopularService from "../../Services/PopularService";
import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE";

export default function PopularMoviesComponent(){

    const [popularMovies,setPopularMovies] = useState([])
    
    useEffect(()=>{

     const obsPopularMovies= ()=>{
        PopularService().subscribe((response)=>{
            setPopularMovies(response)
        })
     }
   //  this.genresUrl= `${this.referenceUrl}discover/movie?api_key=${this.apiKey}&language=${this.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${newGenres}`
  

        return ()=>{
            obsPopularMovies()
        //    setTrendingMovies([])
        }

    },[])
    
    




    const navigate  = useNavigate()
    const goToShow=(id:number)=>{

        navigate ("show/"+id)

    }
    return (
     
        
        <div>
            <p className="title__trending">Popular</p>
        
        <section className="CardMovie">
           
          
          
            {
              popularMovies.length?  popularMovies.map((movies:MOVIE_INTERFACE,index:number)=>{
                   
                    return( 
                        <article onClick={()=>goToShow(movies.id)} key={index}  className="card animated__animate animate__bounceIn">
                       
                        <img className="card__image" src={"https://image.tmdb.org/t/p/w200/"+movies.poster_path+".jpg"} alt="poster" />
                        
                        <div className="container__title__card">
                        {movies.title? <p className="card__title">{movies.title.substring(0,20)}</p>:
                        <p className="card__title">{movies.name}</p>}
                        </div>
                        
                    </article> 
                )
                }): <SkeletonComponent />
                
                
            }
           
        </section>

        </div>
    )
}

