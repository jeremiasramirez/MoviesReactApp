
import { useEffect, useState } from 'react'
import './SearchPage.css'
import { MOVIE_INTERFACE } from '../../Interfaces/MOVIE'
import SearchService from '../../Services/SearchService'
import { Alert, Button, CircularProgress, Snackbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
 

export default function SearchPage(){

    // app state 
    const [numberResults,setNumberResults] = useState(Number)
    const [valueInput,setValueInput] = useState(String)
    const [resultsMovie,setResultsMovie] = useState([])
    const [isFetchingNow,setFetchingNow] = useState(false)
    const [isErrorFetching,setFetchingError] = useState(false)

    const navigate  = useNavigate()
    const goToShow=(id:number)=>{navigate ("/show/"+id)}
    const closeSnack = ()=>setFetchingError(false)


    useEffect(()=>{

        const obsSearchService = ():void=>{
          
            if(valueInput.length>=2){
                setFetchingNow(true)
            
                SearchService(valueInput).subscribe((response:MOVIE_INTERFACE[])=>{
                    // console.log(response);
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
   

         {/*INPUT */}
         <article className='container__input__modal'>
             <input type="search" 
                className='animate__animated animate__fadeInUp'
                autoFocus={true}
                onChange={
                (valueForm)=>{setValueInput(valueForm.target.value);
                setFetchingNow(true);}}  
                placeholder='Search..'/>
         </article>





         {/* movies results number  */}
         {valueInput.length>=3  ? <p className='results animate__animated animate__fadeInDown'>results: {numberResults}</p>:false}
         
         {
           valueInput.length==0 && isFetchingNow==false?  <article className='animate__animated animate__fadeInUpBig explore__button'>
                 <p>¿No sabes que buscar?</p>
                 <Button  variant="text" color="error">Explorar</Button>
             </article> : false
         }
      





         {/* snackbar messa error */}
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
            



            
      
           <article className='container__modal__movies'>
               
                {/* circular loading */}
                 <article className='container__movies__modal'>
                 { isFetchingNow ==true? <CircularProgress className='circular__load' color='error' size={'70px'} thickness={3}/> : false}
                 </article>




             {/* movies */}
           
             {
             valueInput.length!=0?  resultsMovie.map((movies:MOVIE_INTERFACE,index:number)=>{
                     
                  return( 

                            movies.poster_path? <article  onClick={()=>goToShow(movies.id)} key={index}  className="modal__card animate__animated animate__fadeInUp">
                         
                             <img className="modal__card__image" src={"https://image.tmdb.org/t/p/w200/"+movies.poster_path+".jpg"} alt="poster" />
                             
                             <div className="modal__container__title__card">
                             {movies.title? <p className="card__title">{movies.title.substring(0,9)}</p>:
                             <p className="modal__card__title">{movies.name?.substring(0,19)}</p>}
                             </div>
                             
                         </article>  : false
                     )
                     }) :false
             }
           </article>

       
         
     
    </section>

</>
}