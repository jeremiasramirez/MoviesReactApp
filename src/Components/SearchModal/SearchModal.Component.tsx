import { useEffect, useState } from 'react'
import './SearchModal.Component.css'

import SearchService from '../../Services/SearchService'
import { MOVIE_INTERFACE } from '../../Interfaces/MOVIE'
import { Alert, CircularProgress, Snackbar } from '@mui/material'
export default function SearchModal(){

    // app state 
    const [numberResults,setNumberResults] = useState(Number)
    const [valueInput,setValueInput] = useState(String)
    const [resultsMovie,setResultsMovie] = useState([])
    const [isFetchingNow,setFetchingNow] = useState(false)
    const [isErrorFetching,setFetchingError] = useState(false)


    const closeSnack = ()=>setFetchingError(false)
    useEffect(()=>{


        const obsSearchService = ():void=>{
           
            if(valueInput.length>=2){
                setFetchingNow(true)
                setResultsMovie([])
                SearchService(valueInput).subscribe((response:MOVIE_INTERFACE[])=>{
                    console.log(response);
                    setResultsMovie([])
                    setNumberResults(response.length)
                    setResultsMovie(response)
                    setFetchingError(false)
                    setFetchingNow(false)
                }, ()=>{
                    setFetchingNow(false)
                    setNumberResults(0)
                    setResultsMovie([])
                    setFetchingError(true)
                    
                })
            }

        }



        
        return ()=>{
            obsSearchService(); 
            setResultsMovie([])
        }


    }, [valueInput])
 
    


    return <>
        
           <section className='flex__modal'>

                <article className='container__title__modal'>
                    <h4>Search</h4>
                </article>

                {/*INPUT */}
                <article className='container__input__modal'>
                    <input type="search" 
                    className='animate__animated animate__fadeInUp'
                  autoFocus={true}
                    onChange={
                        (valueForm)=>{setValueInput(valueForm.target.value);
                        setFetchingNow(true);}}  
                        placeholder='movies and TV shows..'/>
                </article>

                {/* movies results number  */}
                {valueInput.length>=3  ? <p className='results animate__animated animate__fadeInDown'>results: {numberResults}</p>:false}
                
             


                {/* snack messa error */}
                <Snackbar open={isErrorFetching} autoHideDuration={6000} onClose={closeSnack}>
                    <Alert
                        onClose={closeSnack}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Error: Network connection 
                    </Alert>
                    </Snackbar>
                   
                   
             
                  <article className='container__modal__movies scroll__items'>
                      
                       {/* circular loading */}
                        <article className='container__movies__modal'>
                        { isFetchingNow ==true? <CircularProgress className='circular__load' color='error' size={'70px'} thickness={3}/> : false}
                        </article>

                    {/* movies */}
                  
                    {
                      resultsMovie.map((movies:MOVIE_INTERFACE,index:number)=>{
                            
                         return( 
                                   movies.poster_path? <article key={index}  className="modal__card animate__animated animate__fadeIn">
                                
                                    <img className="modal__card__image" src={"https://image.tmdb.org/t/p/w200/"+movies.poster_path+".jpg"} alt="poster" />
                                    
                                    <div className="modal__container__title__card">
                                    {movies.title? <p className="card__title">{movies.title.substring(0,9)}</p>:
                                    <p className="modal__card__title">{movies.name?.substring(0,19)}</p>}
                                    </div>
                                    
                                </article>  : false
                            )
                            })
                    }
                  </article>

              
                
            
           </section>
 
    </>
}