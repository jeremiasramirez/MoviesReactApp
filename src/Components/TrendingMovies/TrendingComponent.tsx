import { useEffect, useState } from "react";
import TrendingMovieService from "../../Services/TrendingService";
import "./TrendingComponent.css"
import { MOVIE_INTERFACE } from "../../Interfaces/MOVIE";
import SkeletonComponent from "../Skeleton/Skeleton.Component";
export default function TrendingComponent(){
    const [trendingMovies,setTrendingMovies] = useState([])
    
    useEffect(()=>{

        const data= ()=>{
             TrendingMovieService().subscribe((data_)=>{
                // console.log(data_);
                setTrendingMovies(data_)
            })
        }

        return ()=>{
            data()
           setTrendingMovies([])
        }

    },[])
    
    console.log(trendingMovies);
    return (
     
        
        <div>
            <p className="title__trending">Trending Now</p>
        
        <section className="CardMovie">
           
          
          
            {
              trendingMovies.length?  trendingMovies.map((movies:MOVIE_INTERFACE,index:number)=>{
                   
                    return( 
                        <article key={index}  className="card animated__animate animate__bounceIn">
                       
                        <img className="card__image" src={"https://image.tmdb.org/t/p/w200/"+movies.poster_path+".jpg"} alt="poster" />
                        
                        <div className="container__title__card">
                        {movies.title? <p className="card__title">{movies.title}</p>:
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

