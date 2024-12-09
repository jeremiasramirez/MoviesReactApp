import { delay, pluck } from "rxjs"
import { ajax } from "rxjs/ajax"
import { API_KEY, mainURL } from "./API-KEY"
// import { MOVIE_INTERFACE } from "../Interfaces/MOVIE"



export default function CarouselService(){

    const url =  `${mainURL}movie/top_rated?api_key=${API_KEY}&language=es&page=1`

    

    return ajax.get(url, {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjUyNTBlNmE5ZTVjYTk5OTFhYzZjZDFiOTY0YTI1NyIsIm5iZiI6MTczMjMwMzQ3Mi4xODE5NTUsInN1YiI6IjVmNDkwODc5YTJlNjAyMDAzM2Y0MWIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6JdM6vaAFNN_Zr1B1RhOGXkO8dL-9llX615f9rwc5Q'
      }).pipe(
        pluck("response","results"),
        delay(200)
      )
}

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1