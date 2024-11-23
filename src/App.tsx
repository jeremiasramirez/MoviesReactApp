// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import 'animate.css'
import { API_KEY } from './Services/API-KEY'
import { ajax } from 'rxjs/ajax'
import { pluck } from 'rxjs'
import { MOVIE_INTERFACE } from './Interfaces/MOVIE'
// import { AjaxDirection, AjaxResponseType } from 'rxjs/internal/ajax/types'
function App() {

  const [trendingMovies, setTrendingMovies] = useState([])
 useEffect(()=>{
 
  const series=async()=>{
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US?`+API_KEY
  
    ajax.get(url,{
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjUyNTBlNmE5ZTVjYTk5OTFhYzZjZDFiOTY0YTI1NyIsIm5iZiI6MTczMjMwMzQ3Mi4xODE5NTUsInN1YiI6IjVmNDkwODc5YTJlNjAyMDAzM2Y0MWIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6JdM6vaAFNN_Zr1B1RhOGXkO8dL-9llX615f9rwc5Q'
    }).
    pipe(
      pluck('response','results')
    ).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subscribe((data:any)=>{
      setTrendingMovies(data)
    })
     
    
  }

  return ()=>{
    series()

  }

  },[])



  return  <div className='animate__animated animate__fadeIn'>
        {
        
          trendingMovies.map((data:MOVIE_INTERFACE)=>{
            return (
              <div>
                <img src={'https://image.tmdb.org/t/p/w300/'+data.poster_path} alt="movie"/>
              </div>
              
            )
          })
       
        }
      </div>
  
}

export default App
