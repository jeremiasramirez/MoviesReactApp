import { debounceTime, delay, Observable, pluck, take } from "rxjs";
import { API_KEY, mainURL } from "./API-KEY";
import { ajax } from "rxjs/ajax";

export default function SearchService(query:string):Observable<unknown>{
    const url =  `${mainURL}search/multi?query=${query}&include_adult=false&page=1?api_key=${API_KEY}&language=es`

  

    return ajax.get(url, {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjUyNTBlNmE5ZTVjYTk5OTFhYzZjZDFiOTY0YTI1NyIsIm5iZiI6MTczMjMwMzQ3Mi4xODE5NTUsInN1YiI6IjVmNDkwODc5YTJlNjAyMDAzM2Y0MWIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6JdM6vaAFNN_Zr1B1RhOGXkO8dL-9llX615f9rwc5Q'
      }).pipe(
        pluck("response","results"),
        // take(10),
        delay(1000),
        debounceTime(2000) 
      )
}