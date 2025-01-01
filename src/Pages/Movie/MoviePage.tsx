import { useParams } from "react-router-dom"
import "./MoviePage.css"
import DocumentTitle from "../../Partials/DocumentTitle/DocumentTitle.partial";
import { useEffect, useState } from "react";
import MovieService from "../../Services/MovieService"; 


export default function MoviePage(){
    const changeTitle = (title:string)=>{
        DocumentTitle(title)
    }
    
    const [movie,setMovie] = useState(Object)

   
    
    const params:string=String(useParams().id);
    
       useEffect(()=>{
    
         const obsMovieService= ()=>{
            MovieService(params).subscribe((response)=>{  
                setMovie(response)
                console.log(response);
                changeTitle(response.title)
            })
         }

            return ()=>{
                obsMovieService()
            }
    
        },[params])
   
   
   
   
    
    return <>
        {movie.id ? <section className="container__selective__movie">
        <article className="container__selective__poster">
            {/* <img src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path+".jpg"}  alt="backdrop" /> */}
        </article>
          
            <article className="container__selective__info"></article>
        </section> : false
        }
    </>
}